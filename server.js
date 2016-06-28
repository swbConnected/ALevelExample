'use strict';

var express = require('express');

var app = express();
var HTTP_PORT  = 8080;

app.use(express.static(__dirname + '/public'));

app.listen(HTTP_PORT);

console.log('Webserver started on port ' + HTTP_PORT);
