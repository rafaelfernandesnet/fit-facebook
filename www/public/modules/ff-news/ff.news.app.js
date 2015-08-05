var newsFeed = require('./ff.news.feed.directive.js');
var newsPost = require('./ff.news.post.directive.js');

/**
 * Responsible for news content
 *
 * @ngdoc module
 * @name ff.newsModule 
 */
angular.module('ff.newsModule', ['ff.coreModule'])
       .factory('ffNewsService', require('./ff.news.service.js'))
       .directive(newsFeed.name, newsFeed.directive)
       .controller(newsFeed.controllerName, newsFeed.controller)
       .directive(newsPost.name, newsPost.directive)
       .controller(newsPost.controllerName, newsPost.controller)
