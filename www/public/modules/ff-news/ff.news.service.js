/**
 * Responsible for managing the news 
 *
 * @ngdoc service
 * @name ffNewsService
 * @module ff.newsModule
 * @requires $http, $windows, $rootScope
 */
function ffNewsService($http, $window, $rootScope) {

  return {
    post: post,
    activities: activities
  };


  /**
   * Post a new status.
   *
   * @ngdoc method 
   * @name ffNewsService#post  
   * @param {String}   message New status information. 
   * @param {function} fnSuccess Executes when successfully
   *                        post a new status.
   * @param {function} fnError Executes when fail to 
   *                        a new status.
   */
  function post(message, fnSuccess, fnError) {
    debugger;
    return $http.post('/facebook/me/feed?message=' + encodeURIComponent(message))
      .success(function(data, status, headers) {
        if (fnSuccess){
          fnSuccess(data);
        }
        // console.log('configuration loaded');	    
      })
      .error(function(data, status, headers) {
        if (fnError){
          fnError(data);
        }
        console.log('ffNewsService failed to post');
      });
  }

  /**
   * Retrieve the news feed.
   *
   * @ngdoc method 
   * @name ffNewsService#activities  
   * @param {function} fnSuccess Executes when successfully retrieves
   *                        the news feed.
   * @param {function} fnError Executes when fail to retrieve
   *                        the news feed.
   */
  function activities(fnSuccess, fnError) {
    return $http.get('/facebook/me/feed')
      .success(function(data, status, headers) {
        if (fnSuccess)    {
          fnSuccess(data);
        }
      })
      .error(function(data, status, headers) {
        if (fnError){
          fnError(data);
        }
        console.log('ffNewsService failed to get news');
      });
  }
}

module.exports = ['$http', '$window', '$rootScope', ffNewsService];
