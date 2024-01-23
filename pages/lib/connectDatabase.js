// connectDatabase.js
const mysql = require('mysql2');

const condb = mysql.createPool({
  host: 'localhost',
  user: 'Test1',
  password: 'kpL27Iac99',
  database: 'test1',
  connectionLimit: 100,
});

module.exports = condb;