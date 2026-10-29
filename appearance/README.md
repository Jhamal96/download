# AJD appearance controls

Use `ajd-appearance-template.html` when adding the adjustable appearance controls to another AJD web app. It is a self-contained template, so the app does not depend on another site's availability.

1. Insert the template before the page's closing `</head>`.
2. Replace `__APP_ID__` with a JSON string identifying the app and `__SURFACES__` with a JSON string of CSS selectors for its navigation and floating panels. Select surfaces whose existing text colors will remain readable. Use `"legacy"` for a site with no existing light/dark preference.
3. If the app has an existing theme selector, add a native-mode adapter to the template's `nativeModes` and `setNative` functions. Preserve the existing preference and restore the previous mode when AMOLED is turned off. Place the appearance button in the app's existing settings where practical.
4. Verify the slider changes the real page as well as the preview, that both switches work and persist, that AMOLED produces a black background, and that the button works by keyboard and at mobile sizes. Test reduced-transparency and print styles where applicable.
5. Refresh any versioned offline shell cache when publishing changed cached assets.

The preference is device-local and scoped to the app's origin. It does not modify application records or sync preferences across unrelated sites. The effect is web CSS inspired by Liquid Glass; it does not use Apple's native rendering APIs.
