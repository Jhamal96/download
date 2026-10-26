# AJD App Downloads

A central home for Android APKs and installable web apps at https://download.ajdapp.org/.

`index.html` contains the interface. `worker.js` serves the page from the Cloudflare Worker, and `wrangler.jsonc` configures the Worker and custom domain. Cloudflare Workers Builds is connected to this repository and deploys pushes to `main`.

The app list is read from the `apps` table of the dedicated `download` Supabase project using its public, read-only key. Row-level security only exposes published records; visitors cannot edit the catalog. The small backup list in `index.html` is used if the cloud is unreachable and should be updated if the catalog changes. No Supabase secret or service-role key belongs in this repository.

To update listings, edit the Supabase `apps` table. APK links from private GitHub repositories remain restricted and are labeled accordingly. Web-app installation must be started from the target app's own origin; this page opens the corresponding app and provides device-specific directions.
