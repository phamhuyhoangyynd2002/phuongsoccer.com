let config = require('./config.js');
const mysql = require('mysql');

let connection = mysql.createConnection(config);

connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

module.exports = connection;