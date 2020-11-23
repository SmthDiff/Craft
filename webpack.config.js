var Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  // Build Config
  .setOutputPath('public/build/')
  .setPublicPath('/build')

  // Assets
  .addStyleEntry('styles', './assets/css/app.css')
  .addEntry('scripts', './assets/ts/app.ts')
  .copyFiles({
    from: './assets/img',
    to: 'img/[path][name].[ext]',
  })
  .copyFiles({
    from: './assets/icons',
    to: 'icons/[path][name].[ext]',
  })

  // Build Features
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()

  // Production Config
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())

  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = 3;
  })

  // Add TypeScript
  .enableTypeScriptLoader()
  // Add PostCSS
  .enablePostCssLoader()

  // uncomment if you're having problems with a jQuery plugin
  //.autoProvidejQuery()

  // uncomment if you use API Platform Admin (composer require api-admin)
  //.enableReactPreset()
  //.addEntry('admin', './assets/js/admin.js')
;

module.exports = Encore.getWebpackConfig();
