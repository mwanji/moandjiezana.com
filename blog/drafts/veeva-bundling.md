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
- Build Time: 
Biggest optimisation is that I don't have to build any more while developing locally! So in reality going from almost a minute multiplied by the dozens of times a day I wanted to see changes in the simulator to 0.
V1 (Parcel):
BI: 68secs. 
ELA: 31secs. 
JJ: 52secs.
v2 (esbuild):
ELA: 5secs.
JJ: 19-21 seconds.
- JS file size (unzipped): 
Parcel: 
JJ 4.2MB
esbuild: 
JJ 2.7MB
- overall ZIP size
- ease of customisation per client or build

## Optimisations

ZIP size crept up over time from 2-3MB to 6-7MB
- Remove source maps. So big, caused problems in Webkit inspector. What you see is not what you get, anyway, even with source maps. Also cause breakpoints to be skipped, slow to load...
- Remove unnecessary fonts. Huge savings. First with own script, then found post-css-discard-font-faces
- Make build as modular as the code. Split code better on a per-client, per-build basis. Originally, each build had a different codebase and a major early goal was to get to a single codebase. That focus blinded me to this optimisation for a long time. With our codebase unified, modularised and easy to build variants of, it was no longer necessary to ship all (or almost all) the code to every variant.

## Current Problems

- Takes a while to load ES modules. Eg. each lodash-es sub-module is a round-trip to es-dev-server. Even locally, loading hundreds of modules takes a while. We could use Snowpack to pre-build our dependencies. Either bundle all of them together or just unify problematic ones, such as lodash-es.