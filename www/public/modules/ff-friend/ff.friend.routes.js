/**
 * Routes to go to friends 
 *
 * @class ffFriendRoutes
 * @memberOf ff.dashboardModule
 * @example
 * // url = 'http://mywebsite.com/#/friends'
 * // should load the friends controller and the template
 *
 */
module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/friends', {
    controller : 'ffFriendController as vm',
    templateUrl : './modules/ff-friend/ff.friend.tmpl.html'
  });
}]
