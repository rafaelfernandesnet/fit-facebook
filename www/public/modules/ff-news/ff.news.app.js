
var newsFeed = require('./ff.news.feed.directive.js');
/**
 * Responsible for news content
 *
 * @module ff.newsModule 
 * @see ffNewsService 
 * @see ffNewsFeed
 */
angular.module('ff.newsModule', [])
    .factory('ffNewsService', require('./ff.news.service.js'))
    .directive(newsFeed.name, newsFeed.directive)
