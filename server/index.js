var express = require('express')

var app = express()
var db = require('../database/index.js');
var app = express();

var PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function() {
  console.log(`listening on port ${PORT}!`);
});

var io = require('socket.io').listen(server);
var socket = require('./api/socket.js');

var bodyParser = require('body-parser');
var routes = require('./api/routes/rts');
// var data = require('../database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'))
// app.use('/bundles', express.static(__dirname + '/../bundles'))

app.use('/', routes);

io.sockets.on('connection', socket);




