/**
 * Main module, should be used in the ng-app.
 * @module FitFacebook 
 */
var ngModule = angular.module('FitFacebook', [
   'ff.coreModule' 
])


/**
 * INJECT the module in the FitFacebook Module, AS IT IS ABOVE.
 * LOAD the module, SO IT IS BELLOW.
 */

require('./modules/ff-core/ff.core.app.js');
