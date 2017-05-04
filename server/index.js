var express = require('express');
// var bodyParser = require('body-parser');
var items = require('../database');
var routes = require('./api/routes/rts');

var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'))
// app.use('/bundles', express.static(__dirname + '/../bundles'))





app.get('/', function(req, res) {
      res.send('hello world');
})


// app.get('/signup', function(req, res) {
// 	res.send('signup')
// })

// app.post('/signup', function(req, res) {
// 	// console.log(req.body);
// })

// app.get('/login', function(req, res) {
// 	res.send('login')
// })

// app.post('/login', function(req, res) {
// 	//do something
// })

// app.get('/events', function(req, res) {
// 	res.send('events');
// })	


app.listen(3000, function() {
	console.log('listening on port 3000!');
})




