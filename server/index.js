var express = require('express')
var http = require('http');
var socket = require('./api/socket.js');

var app = express()
var server = http.createServer(app);

var db = require('../database/index.js');

var PORT = process.env.PORT || 3000;

var io = require('socket.io').listen(server);
io.sockets.on('connection', socket);

var bodyParser = require('body-parser');
var routes = require('./api/routes/rts');
// var data = require('../database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'))
// app.use('/bundles', express.static(__dirname + '/../bundles'))

app.use('/', routes);

server.listen(PORT, function (){
  console.log(`listening on port ${PORT}!`);
});

