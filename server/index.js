var express = require('express')
var app = express()
var bodyParser = require('body-parser');
// var data = require('../database');
var routes = require('./api/routes/rts');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'))
// app.use('/bundles', express.static(__dirname + '/../bundles'))

app.use('/', routes);

app.listen(PORT, function() {
	console.log(`listening on port ${PORT}!`);
});




