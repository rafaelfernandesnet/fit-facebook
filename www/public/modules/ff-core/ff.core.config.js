module.exports = ['$locationProvider', '$httpProvider', 'ffToken', config];

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
      config.url = 'https:/graph.facebook.com/v2.4/me?access_token=' 
        + $rootScope.token + '&' + config.url.replace('/facebook/','') 
        + '&debug=all&format=json&method=get&pretty=0&suppress_http_code=1'
      return config;
    }

    function shouldNotAddToken(config){
      return (!$rootScope.token || config.url.indexOf('.html') > 0)  
    }

  }])

}
