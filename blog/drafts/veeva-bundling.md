# The Strange Case of Building for Veeva iRep

## What is Veeva iRep?

- Zip up your website
- Runs offline by default, so all dependencies have to be bundled
- Runs embedded in native apps (iPad, iPhone, Windows) and in the browser

## Initial State

A few big files
no build system
ZIPs created by hand

## Parcel

Easy to configure (though many issues around CSS variables led to using PostCSS independently).
Slow
Big output

## Now

- es-dev-server for local development: only ship index.html to simulator. Prefix the two URLs (js & css) to point to http://localhost:8000/$BUILD_ID
- Prod: bundle with blazing-fast esbuild. CSS & copy assets with PostCSS. Create a ZIP file with bestzip. Glue together with yarn scripts.

Compare:
- Time
- JS file size
- overall ZIP size
- ease of customisation per client or build