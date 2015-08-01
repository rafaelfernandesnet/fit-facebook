/**
 * Represents the container area for the main page
 *
 * @module ff.dashboardModule 
 * @see ffdashboardController
 */
angular.module('ff.dashboardModule', [])
    .config(require('./ff.dashboard.routes.js'))
    .controller('ffDashboardController', require('./ff.dashboard.controller.js'))
