// connectDatabase.js
const mysql = require('mysql2');

const condb = mysql.createConnection({
  host: 'localhost',
  user: 'Test1',
  password: 'kpL27Iac99',
  database: 'test1',
});

condb.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  } else {
    console.log('Connected to MySQL database');
  }
});

module.exports = condb;