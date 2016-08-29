var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['angular','jasmine'],

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 300,

    files: [
      './node_modules/angular-mocks/angular-mocks.js',
      './tests/*.spec.ts'
	],

    preprocessors: {  
	  './tests/*.spec.ts': ['webpack']
    },
	
	typescriptPreprocessor: {
      // transforming the filenames 
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
    },
	
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
	
    webpackMiddleware: {
      noInfo: true
    }
  });
}