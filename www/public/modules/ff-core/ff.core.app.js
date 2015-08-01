/**
 * Represents the core module responsible
 * for the workflow off the app.
 *
 * @module ff.coreModule 
 * @see ffCoreController
 * @see ffCoreService
 */
angular.module('ff.coreModule', [])
    .controller('ffCoreController', require('./ff.core.controller.js'))
