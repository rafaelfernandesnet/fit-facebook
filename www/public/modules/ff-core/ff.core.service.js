/**
 * Responsible for friends information
 *
 * @ngdoc service
 * @name ffCoreService
 * @memberOf ff.coreModule
 * @requires $http, $rootScope
 */
function ffCoreService($http, $rootScope){

  var _userInfo;
  return {
    getUserInfo: getUserInfo,
    clearAll: clearAll
  }

  function clearAll(){
    _userInfo = undefined;
  }

  /**
   * Retrieve the information about the user.
   *
   * @ngdoc method 
   * @methodOf ff.coreModule.ffCoreService
   * @name ff.friendModule.ffFriendService#loadUserInfo  
   * @param {function} fn Any function that receives the information as an argument.
   */
  function loadUserInfo(fn){
    $http.get('/facebook/me')
      .success(function(result){
        _userInfo = $rootScope.userInfo = result; 
        if(fn){
          fn(_userInfo);
        }
      })
      .error(function(error){
        console.error('failed to load users information from facebook');
      });
  }


  /**
   * Retrieve the cached information about the user.
   * If the information is not there, go to the backend to retrieve it.
   *
   * @ngdoc method 
   * @methodOf ff.coreModule.ffCoreService
   * @name ff.friendModule.ffFriendService#getUserInfo  
   * @param {function} fn Any function that receives the information as an argument.
   */
  function getUserInfo(fn){
    if (!_userInfo){
      loadUserInfo(fn);   
    } else {
      fn(_userInfo);
    }
  }
}

module.exports = {
  service: ['$http', '$rootScope', ffCoreService],
  name: 'ffCoreService'
}
