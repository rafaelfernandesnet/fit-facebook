/**
 * Represents the core controller, wrapping the 
 * whole app to assist with common features. 
 *
 * @ngdoc class
 * @name ffCoreController
 * @memberOf ff.coreModule
 */
function ffCoreController($scope, $location, ffToken, $window, $rootScope, $http, ffCoreService) {
  var vm = this; 
  var code;
  vm.formatDate = formatDate;
  vm.facebookUrl = 'https://www.facebook.com/dialog/oauth?client_id=155870204744672&redirect_uri=http://localhost:8888/&expiry=86400&scope=email,user_posts,publish_actions,user_friends,user_status,user_games_activity,user_actions.fitness'
  vm.headerUrl = './modules/ff-core/ff.core.header.tmpl.html';
  vm.footerUrl = './modules/ff-core/ff.core.footer.tmpl.html';
  ffCoreService.clearAll();
  loadToken();
  clearUrl();

  function formatDate(date){
    var dateOut = new Date(date);
    return dateOut;
  };
  
  function loadToken(){
    if(!$window.location.search) return;
    
    code = getParameterByName('code');
    $http.get('/authorize/?code='+ code)
         .success(getToken)
         .error(failToGetToken);
  }

  function getToken(data){
    vm.token = $rootScope.token = data.access_token;
    loadUserInfo();
  }
  
  function failToGetToken(error){
    vm.errorMessage = error;
  }

  function loadUserInfo(){
    ffCoreService.getUserInfo(updateUserInfo);
  }

  function updateUserInfo(userInfo){
    vm.userInfo = userInfo;
  }

  function clearUrl(){
    history.pushState("", document.title, $window.location.pathname);
    //$window.location.href = '/#/';
  }

  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec($window.location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}


module.exports = ['$scope', '$location', 'ffToken', '$window', '$rootScope', '$http', 'ffCoreService', ffCoreController] 
