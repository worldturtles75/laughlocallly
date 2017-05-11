var mysql = require('mysql');
var Promise = require('bluebird');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  // password : 'FILL_ME_IN',
  // database : 'laughlocally'
});

// this will automatically insert tables into mysql when server is run from command line. 
var dp = Promise.promisifyAll(db);

dp.connectAsync()
  .then(() => {
  	return dp.queryAsync(`CREATE DATABASE IF NOT EXISTS laughlocally`)
  }) 
  .then(() => {
  	return dp.queryAsync(`USE laughlocally`)
  })
  .then(() => {
  	return dp.queryAsync(`
  		CREATE TABLE IF NOT EXISTS audience (
  		  id INTEGER NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        id_events INTEGER NOT NULL,
        PRIMARY KEY (id)
      )`)
  })
  .then(() => {
  	return dp.queryAsync(`
  		CREATE TABLE IF NOT EXISTS events (
        id INTEGER NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        id_comedians INTEGER NOT NULL,
        date DATE NOT NULL,
        start_time TIME NOT NULL, 
        end_time TIME NOT NULL, 
        id_venues INTEGER NOT NULL,
        photo_url VARCHAR(300) NOT NULL,
        status VARCHAR(50) NOT NULL,
        PRIMARY KEY (id)
      );`)
  })
  .then(() => {
  	return dp.queryAsync(`
  		CREATE TABLE IF NOT EXISTS venues (
        id INTEGER NOT NULL AUTO_INCREMENT,
        dates_availible VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
			  zipcode INTEGER(5) NOT NULL,
			  id_hosts INTEGER NOT NULL,
			  photo_url VARCHAR(1000) NOT NULL,
			  capacity INTEGER NOT NULL,
			  PRIMARY KEY (id)
			);`)
  })
  .then(() => {
  	return dp.queryAsync(`
  		CREATE TABLE IF NOT EXISTS venueavailability (
	      id INTEGER NOT NULL, 
			  start_date DATETIME NOT NULL,
			  end_date DATETIME NOT NULL,
			  PRIMARY KEY (id)
		);`)
  })
  .then(() => {
    return dp.queryAsync(`
    	CREATE TABLE IF NOT EXISTS comedians (
			  id INTEGER NOT NULL AUTO_INCREMENT,
			  bio VARCHAR(10000) NOT NULL,
			  name VARCHAR(255) NOT NULL,
			  website VARCHAR(255) NOT NULL,
			  email VARCHAR(255) NOT NULL,
			  phone VARCHAR(255) NOT NULL,
			  twitter VARCHAR(255) NOT NULL,
			  photo_url VARCHAR(1000) NOT NULL,
			  password VARCHAR(255) NOT NULL,
			  salt VARCHAR(255) NOT NULL,
			  video_url VARCHAR(255) NOT NULL,
			  PRIMARY KEY (id)
			);`)
  })
  .then(() => {
  	return dp.queryAsync(`
  		CREATE TABLE IF NOT EXISTS hosts (
			  id INTEGER NOT NULL AUTO_INCREMENT,
			  name VARCHAR(255) NOT NULL,
			  email VARCHAR(255) NOT NULL,
			  phone VARCHAR(255) NOT NULL,
			  PRIMARY KEY (id)
			);`)
  })

module.exports = db;


// var selectAll = function(callback) {
//   connection.query('SELECT * FROM items', function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// module.exports.selectAll = selectAll;