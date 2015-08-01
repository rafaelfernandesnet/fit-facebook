module.exports = ['$http', ffNewsService];

function ffNewsService($http) {

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
        console.log('ffNewsService failed to get activities');
      });
  }
}
