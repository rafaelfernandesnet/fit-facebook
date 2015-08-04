var newsFeed = require('./ff.news.feed.directive.js');

/**
 * Responsible for news content
 *
 * @ngdoc module
 * @name ff.newsModule 
 */
angular.module('ff.newsModule', [])
       .factory('ffNewsService', require('./ff.news.service.js'))
       .directive(newsFeed.name, newsFeed.directive)
       .controller(newsFeed.controllerName, newsFeed.controller)
