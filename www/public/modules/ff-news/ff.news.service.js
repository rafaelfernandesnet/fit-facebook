/**
 * Service responsible for news
 *
 * @see ff.newsModule
 * @date: 2015/08/01
 * @example: 
 * <ff-news-feed> </ff-news-feed>
 * // returns the whole news feed.
 *
 */
function ffNewsService($http, $window, ffToken) {

  return {
    post: post,
    activities: activities
  };

  function post(fnSuccess, fnError) {
    return $http.get('/api/activities')
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
   * Retrieve the list of friends.
   *
   * @ngdoc method 
   * @methodOf ff.friendModule.ffFriendService
   * @name ff.friendModule.ffFriendService#list  
   * @param {function} fnSuccess Executes when successfully retrieves
   *                        the list of friends receiving the result.
   * @param {function} fnError Executes when fail to retrieve
   *                        the list of friends receiving the error data object from the backend.
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
        console.log('ffNewsService failed to get activities');
      });
  }
}

module.exports = ['$http', '$window', ffNewsService];

