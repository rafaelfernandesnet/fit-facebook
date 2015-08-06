var module = angular.mock.module;
var inject = angular.mock.inject;
var _ = require('underscore');
var _$httpBackend, ffCoreService, URL;
var userId = '1';
describe('ffCoreService', function() {
  // Set up the module
  beforeEach(module('FitFacebook'));

  beforeEach(function() {
    inject(function(ffCoreService, $httpBackend, $rootScope) {
      ffCoreService = ffCoreService;
      _$httpBackend = $httpBackend;
      $rootScope.userInfo = {id: userId}; 
    });
  });

  afterEach (
    inject(function(ffCoreService, $httpBackend) {
        _$httpBackend.verifyNoOutstandingExpectation ();
        _$httpBackend.verifyNoOutstandingRequest ();
    }));


  function mockGet(){
     URL ='/facebook/me';
      _$httpBackend.when('GET', URL)
        .respond({ 'userId': 'userX'}, 
                 {'A-Token': 'xxx'});
  }

  it('Should be able to retrieve activities', function() {
    inject(function(ffCoreService, $httpBackend) {
      mockGet();

      $httpBackend.expectGET(URL);
      ffCoreService.getUserInfo();
      $httpBackend.flush();
    });
  });

});
