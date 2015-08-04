var facebook = require('./facebook');
var request = require('request');

module.exports = [{
  apiType: 'get',
  path: '/authorize',
  fn: getAuthenticationToken
}];

function getAuthenticationToken(req, res) {
  request(facebook.authenticate(req.query.code), 
      function(error, response, body) {
          if (!error && response.statusCode == 200) {
            res.send(body);
          } else {
            res.send({errorMessage:'facebook declined the authentication.'})
          }
      });
}

