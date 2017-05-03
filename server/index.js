var express = require('express');
// var bodyParser = require('body-parser');
var items = require('../database');

var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'))
// app.use('/bundles', express.static(__dirname + '/../bundles'))

var routes = require('./api/routes/rts')
routes(app);

app.listen(3000, function() {
	console.log('listening on port 3000!');
})




