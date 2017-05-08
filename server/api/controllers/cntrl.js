var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var db = require('../../../database/index.js')

// db.connect();

module.exports.getEvents = function(req, res) {
  var queryString = 'SELECT * FROM events';
  db.query(queryString, function (err, result){
    res.json(result);
  })
};

module.exports.getVenues = function(req, res) {
  var queryString = 'SELECT * FROM venues';
  db.query(queryString, function (err, result){
    res.json(result);
  })	
};

module.exports.getComedians = function(req, res) {
	var queryString = `SELECT username FROM comedians where 
	(username = ${req.body.username});`
	db.query(queryString, function(err, result) {
		res.json(result);
	})
};