function config($locationProvider, $httpProvider, ffToken){
  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push(['$rootScope', function($rootScope) {
    return {
      'request': function (config) {
        return addToken(config);
      }
    };

    function addToken(config){
      if (shouldNotAddToken(config)) return config;
      
      if (config.url.indexOf('facebook')>0){
        return formatFacebookUrl(config)
      }
      return config;
    }

    function formatFacebookUrl(config){
      var signal = config.url.indexOf('?') > 0 ? '&':'?';
      config.url = 'https:/graph.facebook.com/v2.4/'
        + config.url.replace('/facebook/','') + signal +'access_token='+$rootScope.token  
        + '&debug=all&format=json&method=get&pretty=0&suppress_http_code=1'
      return config;
    }

    function shouldNotAddToken(config){
      return (!$rootScope.token || config.url.indexOf('.html') > 0)  
    }

  }])

}

module.exports = ['$locationProvider', '$httpProvider', 'ffToken', config];
