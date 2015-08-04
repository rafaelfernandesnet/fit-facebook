/**
 * Main module, should be used in the ng-app.
 * @ngdoc module
 * @name FitFacebook 
 */
var ngModule = angular.module('FitFacebook', [
    'ngAnimate', 'ngRoute', 'ngMessages',
    'ngCookies', 'ngSanitize', 
    'ngResource', 'underscore',
    'angularMoment',
    
   'ff.dashboardModule',
   'ff.newsModule',
   'ff.friendModule',
   'ff.coreModule'
])


require('./components/ng-underscore/ng-underscore.js');
/**
 * INJECT the module in the FitFacebook Module, AS IT IS ABOVE.
 * LOAD the module, SO IT IS BELLOW.
 */

require('./modules/ff-core/ff.core.app.js');
require('./modules/ff-friend/ff.friend.app.js');
require('./modules/ff-news/ff.news.app.js');
require('./modules/ff-dashboard/ff.dashboard.app.js');
