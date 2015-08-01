module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller : 'ffDashboardController as vm',
    templateUrl : './modules/ff-dashboard/ff.dashboard.tmpl.html'
  });
}]
