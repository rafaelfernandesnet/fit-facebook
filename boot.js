var production = false;//process.env.NODE_ENV === 'production';

var express = require('express');
var _ = require('underscore');
var bodyParser = require('body-parser');
var uuid = require('node-uuid'); // to generate guids.
var apiList = require('./api/apiList');
var app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
var logedInUsers = [];

_.each(apiList, function(apiItem){
    if (apiItem.apiType === 'put'){
        app.put(apiItem.path, apiItem.fn);
    } if (apiItem.apiType === 'get'){
        app.get(apiItem.path, apiItem.fn);
    } else {
        app.post(apiItem.path, apiItem.fn);
    }
});

var wwwDir = production ? '/www/dist/fit-facebook' : '/www/public';

var www = express.static(__dirname + wwwDir);
app.use('/', www);

app.listen(8888);
