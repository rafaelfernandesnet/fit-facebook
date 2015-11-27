/**
 * Responsible for friends information
 *
 * @ngdoc service
 * @name ffFriendService
 * @requires $http
 */
function ffFriendService($http, $rootScope) {
  return {
    list: list
  }

  /**
   * Retrieve the list of friends.
   *
   * @ngdoc method 
   * @name ffFriendService#list  
   * @param {function} fnSuccess Executes when successfully retrieves
   *                        the list of friends receiving the result.
   * @param {function} fnError Executes when fail to retrieve
   *                        the list of friends receiving the error data object from the backend.
   */
  function list(fnSuccess, fnError){
    return $http.get('/facebook/' + $rootScope.userInfo.id + '/friends')
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

module.exports = {
 service: ['$http','$rootScope', ffFriendService],
 name: 'ffFriendService'
}
