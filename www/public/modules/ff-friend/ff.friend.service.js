module.exports = {
 service: ['$http', ffFriendService],
 name: 'ffFriendService'
}

function ffFriendService($http) {
  return {
    list: list
  }

  function list(fnSuccess, fnError){
    return $http.get('/api/friends')
      .success(function(data, status, headers) {
        if (fnSuccess){
          fnSuccess(data);
        }
      })
      .error(function(data, status, headers) {
        if (fnError){
          fnError(data);
        }
        console.log('ffNewsService failed to get activities');
      });
  }
}
