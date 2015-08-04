var secret = require('./facebook.secret.ids');
// create the file api/facebook.secret.ids.js
// module.exports = {
//     clientId:'????',
//     clientSecret:'?????'
// }

module.exports = {
  authenticate: function (code) {
    var client_id = secret.clientId;
    var client_secret = secret.clientSecret;
    var redirect_uri = 'http://localhost:8888/';
    var url = 'https://graph.facebook.com/';
    var api = 'v2.3/oauth/access_token';
    var parameters = '?client_id={client_id}&client_secret={client_secret}&redirect_uri={redirect_uri}&code={code}';

    var rawUrl = url + api + parameters;

    var formatedUrl = rawUrl.replace('{client_id}', client_id)
                            .replace('{client_secret}', client_secret)
                            .replace('{redirect_uri}', redirect_uri)
                            .replace('{code}', code);

    return formatedUrl;
  }
}
