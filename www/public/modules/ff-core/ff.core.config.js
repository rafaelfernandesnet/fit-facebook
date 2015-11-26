/**
 * Intecept all http request to inject the facebook
 * token and information if the url contains /facebook/
 *
 * @ngdoc method 
 * @name ff.coreModule#config 
 *
 * @example
 *
 * '/facebook/me/feed'
 * gets parsed to:
 * 'https://graph.facebook.com/v2.4/me/feed?access_token=CAACNw1wvUZBABAPWXYasv44Fci2CocopbHZC9A5k4B1DstLQWG0Jjjvwuv8KNjR5WMZCMLPIRvGfUCarP6PfdHXWYlZAZBCrZAmtyndEvGZA6uZBaBRR5Cjvv0Y8sFkAQznelMEfkly23MZAZCp8JYtexthtnru50VBHHWDOFdZAvgm0kX57uySf05ZCvDRwGRmDNQZAFt4rHGWwSOsQ32upriv81&debug=all&format=json&method=get&pretty=0&suppress_http_code=1'
 */
function facebookInterceptorProvider($locationProvider, $httpProvider, ffToken){
  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push(['$rootScope', function($rootScope) {
    return {
      'request': function (config) {
        return addToken(config);
      }
    };

    /** Parse the url in case it has /facebook/ */
    function addToken(config){
      if (shouldNotAddToken(config)) return config;
      
      if (config.url.indexOf('facebook')>0){
        return formatFacebookUrl(config)
      }
      return config;
    }

    /** Add all facebook parameters with the access token */
    function formatFacebookUrl(config){
      var signal = config.url.indexOf('?') > 0 ? '&':'?';
      config.url = 'https:/graph.facebook.com/v2.4/'
        + config.url.replace('/facebook/','') + signal +'access_token='+$rootScope.token  
        + '&debug=all&format=json&method=' + config.method.toLowerCase() + '&pretty=0&suppress_http_code=1'
      return config;
    }

    function shouldNotAddToken(config){
      return (!$rootScope.token || config.url.indexOf('.html') > 0)  
    }
  }]);

  return { $get: function() {} };

}

module.exports = ['$locationProvider', '$httpProvider', 'ffToken', facebookInterceptorProvider];
module.exports.name = 'facebookInterceptorProvider';
