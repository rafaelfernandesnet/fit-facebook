
var module = angular.mock.module;
var inject = angular.mock.inject;
var _ = require('underscore');
var _$httpBackend, ffNewsService, URL;
var userId = '1';
var message = 'I feel awesome!';
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

  function mockGet(){
     URL ='/facebook/me/feed';
      _$httpBackend.when('GET', URL)
        .respond({ 'userId': 'userX'}, 
                 {'A-Token': 'xxx'});
  }
  
  function mockPost(){
     URL ='/facebook/me/feed?message='+ encodeURIComponent(message);
      _$httpBackend.when('POST', URL)
        .respond({ 'userId': 'userX'}, 
                 {'A-Token': 'xxx'});
  }

  it('Should be able to retrieve the news feed', function() {
    inject(function(ffNewsService, $httpBackend) {
      mockGet();

      $httpBackend.expectGET(URL);
      ffNewsService.activities();
      $httpBackend.flush();
    });
  });

  it('Should be able post new status', function() {
    inject(function(ffNewsService, $httpBackend) {
      mockPost();

      $httpBackend.expectPOST(URL);
      ffNewsService.post(message);
      $httpBackend.flush();
    });
  });

});
