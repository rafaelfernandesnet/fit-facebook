/**
 * Routes for the dashboard 
 *
 * @ngdoc method
 * @name ff.dashboardModule#config
 * @example
 * // url = 'http://mywebsite.com/'
 * // should load the dashboard controller and template
 *
 */
module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller : 'ffDashboardController as vm',
    templateUrl : './modules/ff-dashboard/ff.dashboard.tmpl.html'
  });
}]
