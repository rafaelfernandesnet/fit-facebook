var friendController = require('./ff.friend.controller.js');
var friendService = require('./ff.friend.service.js');

/**
 * Responsible for friends information and representation
 *
 * @ngdoc module
 * @name ff.friendModule 
 */
angular.module('ff.friendModule', [])
    .config(require('./ff.friend.routes.js'))
    .factory(friendService.name, friendService.service)
    .controller(friendController.name, friendController.controller)
