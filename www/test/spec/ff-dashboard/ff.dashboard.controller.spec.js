var module = angular.mock.module;
var inject = angular.mock.inject;
var _ = require('underscore');
describe('ffDashboardController', function() {
    var scope, ctrl;

    beforeEach(module('FitFacebook'));

    // load the mocked controller
    beforeEach(function() {
        inject(function($controller, $rootScope) {
            scope = $rootScope.$new();

            ctrl = $controller('ffDashboardController', {
                $scope: scope
            });
        });
    });

    // destroy the current scope
    afterEach(function() {
        inject(function($rootScope) {
            $rootScope.$destroy();
        });
    });

    it('should exist', function() {
        expect(ctrl).toBeDefined();
    });
});
