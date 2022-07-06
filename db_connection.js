// (A) LOAD DB MODULE
const mysql = require("mysql");

// (B) CREATE CONNECTION - CHANGE TO YOUR OWN !
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fruit_package",
  port: 33067,
});
db.connect((err) => {
  if (err) { throw err; }
  console.log("DB connection OK");
});

// (C) QUERY
db.query("SELECT * FROM `fruits`", (err, results) => {
  if (err) { throw err; }
  console.log(results);
});
