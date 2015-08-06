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
    scope: true,
    replace: true,
    link: function(scope, element, attrs) {

    }
  };
}

/**
 * @ngdoc directive 
 * @memberOf ff.newsModule
 * @name ff.newsModule#ffNewsPostController
 * @description Controller responsible for the news post.
 */
function ffNewsPostController($scope, $rootScope, ffNewsService){
  var vm = this;
  vm.test = 'This directive is bound.'
  vm.post = post;

  function post(){
    vm.waiting = true;
    ffNewsService.post(vm.message, updateContent, failedToPost);  
  }
 
  function failedToPost(){
    vm.waiting = false;
  }

  function updateContent(){
    $rootScope.$broadcast('contentUpdated');
    vm.message = '';
    vm.waiting = false;
  }
}

module.exports = {
  directive: [ffNewsPost],
  name: 'ffNewsPost',
  controller: ['$scope', '$rootScope','ffNewsService', ffNewsPostController],
  controllerName: 'ffNewsPostController'
};

