// connectDatabase.js
const mysql = require('mysql2');

const condb = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test1',
  connectionLimit: 100,
});

module.exports = condb;