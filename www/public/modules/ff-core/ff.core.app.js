var service = require('./ff.core.service.js'); 
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
    .config(require('./ff.core.config.js'));

