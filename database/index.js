var mysql = require('mysql');

module.exports = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  // password : 'FILL_ME_IN',
  database : 'laughlocally'
});



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