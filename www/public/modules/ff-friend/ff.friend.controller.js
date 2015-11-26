/**
 * Controls the friends view.
 *
 * @ngdoc controller
 * @name ffFriendController
 * @module ff.friendModule
 * @requires $scope, ffFriendService
 */
function ffFriendController($scope, ffFriendService) {
  var vm = this; 
  ffFriendService.list(loadFriends);

  function loadFriends(friends){
    debugger;
    vm.friends = friends;
  }
}

module.exports ={
  controller:['$scope', 'ffFriendService', ffFriendController],
  name: 'ffFriendController'
}
