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

  function activities(fnSuccess, fnError) {
    return $http.get('/facebook/fields=posts.limit(15)')
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
        console.log('ffNewsService failed to get activities');
      });
  }
}

module.exports = ['$http', '$window', ffNewsService];

