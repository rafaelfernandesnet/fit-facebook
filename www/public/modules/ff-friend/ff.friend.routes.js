module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/friends', {
    controller : 'ffFriendController as vm',
    templateUrl : './modules/ff-friend/ff.friend.tmpl.html'
  });
}]
