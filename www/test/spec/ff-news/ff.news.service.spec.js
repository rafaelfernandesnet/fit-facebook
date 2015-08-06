
var module = angular.mock.module;
var inject = angular.mock.inject;
var _ = require('underscore');
var _$httpBackend, ffNewsService, URL;
var userId = '1';
describe('ffNewsService', function() {
  // Set up the module
  beforeEach(module('FitFacebook'));

  beforeEach(function() {
    inject(function(ffNewsService, $httpBackend, $rootScope) {
      ffNewsService = ffNewsService;
      _$httpBackend = $httpBackend;
      $rootScope.userInfo = {id: userId}; 
    });
  });

  afterEach (
    inject(function(ffNewsService, $httpBackend) {
        _$httpBackend.verifyNoOutstandingExpectation ();
        _$httpBackend.verifyNoOutstandingRequest ();
    }));


  function mockPost(){
     URL ='/facebook/me/feed';
      _$httpBackend.when('POST', URL)
        .respond({ 'userId': 'userX'}, 
                 {'A-Token': 'xxx'});
  }

  it('Should be able to retrieve activities', function() {
    inject(function(ffNewsService, $httpBackend) {
      mockPost();

      $httpBackend.expectPOST(URL);
      ffNewsService.post();
      $httpBackend.flush();
    });
  });

});
