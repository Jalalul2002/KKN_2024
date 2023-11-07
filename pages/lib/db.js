// db.js
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'Test1',
  password: 'kpL27Iac99',
  database: 'nextjs_crud',
});

// const con = mysql.createConnection({
//   host: 'sql206.infinityfree.com',
//   user: 'if0_35378913',
//   password: 'UkzzjpkXx0I0',
//   database: 'if0_35378913_kkndev',
// });

con.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  } else {
    console.log('Connected to MySQL database');
  }
});

module.exports = con;