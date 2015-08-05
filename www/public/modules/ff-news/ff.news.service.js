/**
 * Responsible for managing the news 
 *
 * @ngdoc service
 * @name ffNewsService
 * @memberOf ff.newsModule
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
   * @methodOf ff.newsModule.post
   * @name ff.newsModule.ffNewsService#post  
   * @param {String}   message New status information. 
   * @param {function} fnSuccess Executes when successfully
   *                        post a new status.
   * @param {function} fnError Executes when fail to 
   *                        a new status.
   */
  function post(message, fnSuccess, fnError) {
    return $http.post('/facebook/me/feed', {message: message})
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
   * @methodOf ff.newsModule.activities
   * @name ff.newsModule.ffNewsService#activities  
   * @param {function} fnSuccess Executes when successfully retrieves
   *                        the news feed.
   * @param {function} fnError Executes when fail to retrieve
   *                        the news feed.
   * @example
   * Other option is to use fields=posts.limit(15) as a parameter for news.
   * but the structure changes, instead of data to get the posts, it's  data.posts
   */
  function activities(fnSuccess, fnError) {
    return $http.get('/facebook/me/feed')
      .success(function(data, status, headers) {
        if (fnSuccess)    {
          fnSuccess(data);
        }
        // console.log('configuration loaded');	    
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

