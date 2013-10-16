var webapp = require('fh-webapp');
var express = require('express');
$fh = require('fh-api');
var mainjs = require('./main.js');
var serverjs = require('./server.js');

var app = express();
app.use('/sys', webapp.sys(mainjs));
app.use('/mbaas', webapp.mbaas);
app.use('/cloud', webapp.cloud(mainjs));

console.log('__dirname  = ' + __dirname);

app.use("/", express.static(__dirname + '/static/index.html'));
app.use(express.static(__dirname + '/static'));


app.use('/join', serverjs.join);
app.use('/who', serverjs.who);
app.use('/recv', serverjs.recv);
app.use('/send', serverjs.send);
app.use('/part', serverjs.part);

module.exports = app.listen(process.env.FH_PORT || process.env.VCAP_APP_PORT || 8001);