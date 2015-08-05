/**
 * @ngdoc directive
 * @memberOf ff.newsModule
 * @name ffNewsPost
 * @description Directive responsible to post new status. 
 * @example
 * <ff-news-post> </ff-news-post>
 */
function ffNewsPost() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: './modules/ff-news/ff.news.post.directive.tmpl.html',
        controller: 'ffNewsPostController as vm',
        replace: true,
        link: function(scope, element, attrs) {

        }
    };
}

/**
 * @ngdoc class
 * @memberOf ff.newsModule
 * @name ffNewsPostController
 * @description Controller responsible for the news post.
 */
function ffNewsPostController($scope, $rootScope, ffNewsService){
  var vm = this;

  vm.post = post;

  function post(){
    debugger;
    ffNewsService.post(vm.message, updateContent);  
  }

  function updateContent(){
    $rootScope.$broadcast('contentUpdated')
  }
}

module.exports = {
  directive: [ffNewsPost],
  name: 'ffNewsPost',
  controller: ['$scope', '$rootScope','ffNewsService', ffNewsPostController],
  controllerName: 'ffNewsPostController'
};

