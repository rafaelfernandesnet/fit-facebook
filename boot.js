var production = false;//process.env.NODE_ENV === 'production';

var express = require('express');
var _ = require('underscore');
var bodyParser = require('body-parser');
var uuid = require('node-uuid'); // to generate guids.
var apiList = require('./api/apiList');
var app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
var logedInUsers = [];

loadAllApis();

var wwwDir = production ? '/www/dist/fit-facebook' : '/www/public';

var www = express.static(__dirname + wwwDir);
app.use('/', www);

app.listen(8888);

function loadAllApis(){
  _.each(apiList, function(apiItem){
    app[apiItem.apiType](apiItem.path, apiItem.fn);
  });
}
