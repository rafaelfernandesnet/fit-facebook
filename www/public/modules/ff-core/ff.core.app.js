
/**
 * Represents the core module responsible
 * for the workflow off the app.
 *
 * @ngdoc module
 * @name ff.coreModule 
 * @see ffCoreController
 */
angular.module('ff.coreModule', [])
    .controller('ffCoreController', require('./ff.core.controller.js'))
    .constant('ffToken','')
    .config(require('./ff.core.config.js'));

//.constant('ffToken',require('../../facebook-token.js'))
// .constant('ffToken', getParameterByName('code'))
// function getParameterByName(name) {
//    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//    results = regex.exec(window.location.search);
//    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
//  }

