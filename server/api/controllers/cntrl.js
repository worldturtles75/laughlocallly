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
	var queryString = `SELECT * FROM comedians`
	db.query(queryString, function(err, result) {
		res.json(result);
	})
};

module.exports.getComedian = function(req, res) {
  var queryString = `SELECT username FROM comedians where 
  (username = ${req.body.username});`
  db.query(queryString, function(err, result) {
    res.json(result);
  })
};

module.exports.getEventInfo = function(req, res) {
  console.log('req', req.query)
  var queryString = `SELECT * FROM events where 
  (id = ${req.query});`
  db.query(queryString, function(err, result) {
    res.json(result);
  })
};

module.exports.audienceRegistration = function(req, res) {
  var params = [];
  for (var key in req.body) {
    params.push(req.body[key]);
  }

  var queryString = 'INSERT INTO audience (name, email, phone, id_events) VALUE (?,?,?,?)' 
  db.query(queryString, params, function(err, result) {
    res.json(result);
  })
};