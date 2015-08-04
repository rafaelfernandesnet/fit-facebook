/**
 * Represents the container area for the main page
 *
 * @ngdoc module
 * @name ff.dashboardModule 
 */
angular.module('ff.dashboardModule', [])
    .config(require('./ff.dashboard.routes.js'))
    .controller('ffDashboardController', require('./ff.dashboard.controller.js'))
