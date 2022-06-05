const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
    host: "localhost",
    // Your MySQL username
    user: "root",
    password: "Cisco007.",
    database: "election",
  });

  module.exports = db;