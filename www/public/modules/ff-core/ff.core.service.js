module.exports = {
  service: ['$http', ffCoreService],
  name: 'ffCoreService'
}

function ffCoreService($http){
  var _userInfo;
  return {
    getUserInfo: getUserInfo,
    clearAll: clearAll
  }

  function clearAll(){
    _userInfo = undefined;
  }

  function loadUserInfo(fn){
    $http.get('/facebook/me')
      .success(function(result){
        _userInfo = result; 
        fn(_userInfo);
      })
      .error(function(error){
        console.error('failed to load users information from facebook');
      });
  }

  function getUserInfo(fn){
    if (!_userInfo){
      loadUserInfo(fn);   
    } else {
      fn(_userInfo);
    }
  }
}
