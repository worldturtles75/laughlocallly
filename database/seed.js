var mysql = require('mysql');
var db = require('./index.js');
var comedianData = require('../fakeData/comedianData.json');
var eventsDummy = require('../fakeData/eventsData.json');
var audienceData = require('../fakeData/usersData.json');
var venuesData = require('../fakeData/venuesData.json');
var hostsData = require('../fakeData/hostsData.json');

// db.connect();

db.query('USE heroku_46dfd3e3a278e3c', function(err, results) {
   //
  });  

comedianData.forEach ( (obj) => {
  var params = [];
  for (var key in obj) {
    params.push(obj[key]);
  }
  var queryStr = 'insert into comedians \
                  value (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';          
  db.query(queryStr, params, function(err, results) {
    console.log('Dummy data inserted into comedians table');
  });  
})

eventsDummy.forEach ( (obj) => {
  var params = [];
  for (var key in obj) {
    params.push(obj[key]);
  }
  var queryStr = 'insert into events \
                  value (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';          
  db.query(queryStr, params, function(err, results) {
    console.log('Dummy data inserted into events table');
  });  
})

audienceData.forEach ( (obj) => {
  var params = [];
  for (var key in obj) {
    params.push(obj[key]);
  }
  var queryStr = 'insert into audience \
                  value (?, ?, ?, ?, ?)';  
                  console.log('audience :', params)        
  db.query(queryStr, params, function(err, results) {
    console.log('Dummy data inserted into audience table');
  });  
})

venuesData.forEach ( (obj) => {
  var params = [];
  for (var key in obj) {
    params.push(obj[key]);
  }
  var queryStr = 'insert into venues \
                  value (?, ?, ?, ?, ?, ?, ?)';      
                  console.log('venues :', params)            
  db.query(queryStr, params, function(err, results) {
    console.log('Dummy data inserted into venues table');
  });  
})

hostsData.forEach ( (obj) => {
  var params = [];
  for (var key in obj) {
    params.push(obj[key]);
  }
  var queryStr = 'insert into hosts \
                  value (?, ?, ?, ?)';          
  db.query(queryStr, params, function(err, results) {
    console.log('Dummy data inserted into hosts table');
  });  
})