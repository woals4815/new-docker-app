const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'Woalsdl33781$',
  database: 'myapp',
  port: 3306,
});

exports.pool = pool;
