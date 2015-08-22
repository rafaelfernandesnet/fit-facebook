var module = angular.mock.module;
var inject = angular.mock.inject;
var _ = require('underscore');
var _$httpBackend, ffFriendService, URL;
var userId = '1';
describe('ffFriendService', function() {
  // Set up the module
  beforeEach(module('FitFacebook'));

  beforeEach(function() {
    inject(function(ffFriendService, $httpBackend, $rootScope) {
      ffFriendService = ffFriendService;
      _$httpBackend = $httpBackend;
      $rootScope.userInfo = {id: userId}; 
    });
  });

  afterEach (
    inject(function($httpBackend) {
        _$httpBackend.verifyNoOutstandingExpectation ();
        _$httpBackend.verifyNoOutstandingRequest ();
    }));


  function mockGet(){
     URL ='/facebook/'+ userId +'/friends';
      _$httpBackend.when('GET', URL)
        .respond({ 'userId': 'userX'}, 
                 {'A-Token': 'xxx'});
  }

  it('Should be able to retrieve activities', function() {
    inject(function(ffFriendService, $httpBackend) {
      mockGet();

      $httpBackend.expectGET(URL);
      ffFriendService.list();
      $httpBackend.flush();
    });
  });

});
