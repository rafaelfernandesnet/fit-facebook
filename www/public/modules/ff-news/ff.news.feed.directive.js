module.exports = {
    directive: ['ffNewsService', ffNewsFeed],
    name: 'ffNewsFeed'
};

/**
 * Service responsible for news
 *
 * @class ffNewsFeed
 * @see ff.newsModule
 * @date: 2015/08/01
 * @example: <ff-news-feed></ff-news-feed>
 */
function ffNewsFeed(ffNewsService) {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: './modules/ff-news/ff.news.feed.directive.tmpl.html',
        replace: true,
        link: function(scope, element, attrs) {
         ffNewsService.activities();
         
         function populateNews(data){
           scope.news = data; 
         }
        }
    };
}
