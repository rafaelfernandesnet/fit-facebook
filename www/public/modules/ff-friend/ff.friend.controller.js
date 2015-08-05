/**
 * Controlls the main dashboard area.
 *
 * @class ffFriendController
 * @memberOf ff.friendModule
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
