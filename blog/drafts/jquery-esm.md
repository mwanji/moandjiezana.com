Running jQuery (v3) in ES Module and nodeJS environments at the same time is surprisingly difficult.

Doesn't have an ES6 import.
When running in node, not added to window.

Many dependencies rely on it, with <code>import $ from 'jquery'</code>. This can't work in a ESM environment, but works in a node build tool because they map it to CommonJS.

In a browser, you would do <code>import 'jquery'</code> and it would be added to the window.

What to do when you're running in a browser and have dependencies that import jQuery in a node-only way?

I use es-dev-server.
<code>module-dirs</code> config setting takes an array of folders, defaulting to ['node_modules']. I prepended another folder: ['test_modules', 'node_modules']. Now, es-dev-server attempts to resolve imports in test_modules before going to node_modules.

In test_modules, I create a npm module-like folder structure (eg. test_modules/jquery/index.js) for every library that has an import issue.

Category: doesn't have an ES6 export, only adds itself to window
jquery:
import '../../node_modules/jquery/dist/jquery.js';

export default window.$;
chart.js:  
import 'chart.js'; export window.ChartJs;

mustache: es-dev-server was trying to load mustache.js instead of mustache.mjs
moment: chart.js needed moment to be global
daterangepicker: outdated UMD template that crashed when loaded as a module (because it assumes this === window) => I wrote a PR to update UMD template.

By handling these issues in es-dev-server, I avoid modifiying my source code. So it runs the same as before in Parcel (or another build tool).

Outside of es-dev-server:

bootstrap: when importing components individually, use src/ versions rather than dist/. They both add themselves to the global context, but dist/ expects jQuery and Util.js to be available globally. src/ imports its dependencies and has a default export. The default export probably isn't necessary, as these are generally used from jquery, so:
import 'bootstrap/js/src/button.js';

bootstrap-table: strangely, src/ is ES6, but doesn't import jQuery, so I suppose it expects to be in window? Indeed, loading src/bootstrap-table.js directly as a module fails with Uncaught ReferenceError: $ is not defined
