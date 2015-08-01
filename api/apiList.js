var friends = require('./mockedFriends');
var activities = require('./mockedActivities');

module.exports = [{ 
  apiType: 'get',
  path: '/api/frieds/',
  fn: function(req, res) {
    setTimeout(function() {
      res.send(friends);
    }, 800);
  }
},{ 
  apiType: 'get',
  path: '/api/activities/',
  fn: function(req, res) {
    setTimeout(function() {
      res.send(activities);
    }, 800);
  }
},{
  apiType: 'post',
  path: '/me/feed/:message',
  fn: function(req, res) {
    setTimeout(function() {
      res.send(true);
    }, 800);
  }
}
];
