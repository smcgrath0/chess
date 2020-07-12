// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE
// });

const { Pool, Client } = require("pg");
// const pool = new Pool({
//   user: "dbuser",
//   host: "database.server.com",
//   database: "mydb",
//   password: "secretpassword",
//   port: 3211,
// });
// pool.query("SELECT NOW()", (err, res) => {
//   console.log(err, res);
//   pool.end();
// });
const client = new Client({
  user: "postgres",
  database: "chess",
});

module.exports = client;
