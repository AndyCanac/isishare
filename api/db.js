// db.js
const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "isishare_bdd",
});

module.exports = pool;
