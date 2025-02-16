const Encore = require("@symfony/webpack-encore");

// Directory where compiled assets will be stored
Encore
    // Directory where compiled assets will be stored
    .setOutputPath("webroot/build/")

    // Public path used by the web server to access the output path
    .setPublicPath("/build")

    // Only needed for CDN's or sub-directory deploy
    .setManifestKeyPrefix("build/")

    // Main entry points
    .addEntry("app", "./assets/js/app.js")
    .addEntry("react-app", "./assets/js/react-app.jsx")

    // Enable React preset
    .enableReactPreset()

    // Enable Sass/SCSS support
    .enableSassLoader()

    // Enable source maps during development
    .enableSourceMaps(!Encore.isProduction())

    // Enable versioning when on production
    .enableVersioning(Encore.isProduction())

    // Pass null to configureBabel to respect external .babelrc
    .configureBabel(null)

    // Generate manifest.json with asset mapping
    .enableSingleRuntimeChunk();

// // Check if hmr is available and enable it for development
// if (Encore.isRuntimeEnvironmentConfigured() && !Encore.isProduction()) {
//     // Enable HMR only in dev environment if the method exists
//     if (typeof Encore?.enableHMR === "function") {
//         Encore.enableHMR();
//     }
// }

module.exports = Encore.getWebpackConfig();
