/**
 * @ngdoc directive
 * @memberOf ff.newsModule
 * @name ffNewsFeed
 * @description Directive responsible to render the news feed. 
 *
 * {@link https://github.com/rafaelfernandesnet/fit-facebook/blob/master/www/public/modules/ff-news/ff.news.feed.directive.js Link to the code}
 * @example 
 * <ff-news-feed> </ff-news-feed>
 */
function ffNewsFeed() {
    return {
        restrict: 'E',
        transclude: true,
        scope: true,
        templateUrl: './modules/ff-news/ff.news.feed.directive.tmpl.html',
        controller: 'ffNewsFeedController as vm',
        replace: true,
        link: function(scope, element, attrs) {

        }
    };
}

/**
 * @ngdoc class
 * @memberOf ff.newsModule
 * @name ff.newsModule#ffNewsFeedController
 * @description Controller responsible for the news feed.
 */
function ffNewsFeedController($scope, $rootScope, ffNewsService, $timeout, _){
  var vm = this;
  var reloadNewsEvery = 10000;
  var plainNewsInfo;
  $scope.$on('authenticated', loadActivities);
  $scope.$on('contentUpdated', loadActivities);

  if ($rootScope.token){
    loadActivities();
  }

  function loadActivities(){
    ffNewsService.activities(populateNews);
    autoUpdate();
  }

  function autoUpdate(){
    $timeout(function(){
      ffNewsService.activities(populateNews);
      autoUpdate();
    }, reloadNewsEvery);
  }

  function populateNews(result){
    if (angular.toJson(vm.news) === angular.toJson(result.data)) return;
    vm.news = result.data; 
  }
}

module.exports = {
  directive: [ffNewsFeed],
  name: 'ffNewsFeed',
  controller: ['$scope', '$rootScope','ffNewsService', '$timeout', '_', ffNewsFeedController],
  controllerName: 'ffNewsFeedController'
};

