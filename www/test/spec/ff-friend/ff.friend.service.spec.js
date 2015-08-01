var module = angular.mock.module;
var inject = angular.mock.inject;
var _ = require('underscore');
var _$httpBackend, ffFriendService, URL;
describe('ffFriendService', function() {
  // Set up the module
  beforeEach(module('FitFacebook'));

  beforeEach(function() {
    inject(function(ffFriendService, $httpBackend) {
      ffFriendService = ffFriendService;
      _$httpBackend = $httpBackend;

    });
  });

  afterEach (
    inject(function(ffFriendService, $httpBackend) {
        _$httpBackend.verifyNoOutstandingExpectation ();
        _$httpBackend.verifyNoOutstandingRequest ();
    }));


  function mockGet(){
     URL ='/api/activities';
      _$httpBackend.when('GET', URL)
        .respond({ 'userId': 'userX'}, 
                 {'A-Token': 'xxx'});
  }

  it('Should be able to retrieve activities', function() {
    inject(function(ffFriendService, $httpBackend) {
      mockGet();

      $httpBackend.expectGET(URL);
      ffFriendService.get();
      $httpBackend.flush();
    });
  });

});
