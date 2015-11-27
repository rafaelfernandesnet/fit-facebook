var service = require('./ff.core.service.js'); 
var facebookInterceptorProvider = require('./ff.core.config.js');
/**
 * Represents the core module responsible
 * for the workflow of the app.
 *
 * @ngdoc module
 * @name ff.coreModule 
 */
angular.module('ff.coreModule', [])
    .controller('ffCoreController', require('./ff.core.controller.js'))
    .service(service.name, service.service)
    .constant('ffToken','')
    .provider('facebookInterceptor', facebookInterceptorProvider)
    .config(function(facebookInterceptorProvider) {});

