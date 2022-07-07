// (A) LOAD DB MODULE
const mysql = require("mysql");
const { fileURLToPath } = require("url");

// (B) CREATE CONNECTION - CHANGE TO YOUR OWN !
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fruit_package",
  port: 33067,
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("DB connection OK");
});

// (C) QUERY
db.query("SELECT * FROM `fruits`", (err, results) => {
  if (err) {
    throw err;
  }
  console.log("results", results);
});

db.query(
  "SELECT s.fruit, f.type, s.weight FROM `fruits` as f INNER JOIN `stocks` as s ON f.id = s.fruit  ",
  (err, results) => {
    if (err) {
      throw err;
    }
    console.log("stocks", results);
  }
);

db.query(
  "SELECT  f.type, s.quantity_sold FROM `fruits` as f INNER JOIN `sales` as s ON f.id = s.fruit  ",
  (err, results) => {
    if (err) {
      throw err;
    }
    console.log("sales", results);
  }
);

db.query(
  "SELECT  f.type as name, sales.quantity_sold, f.price as sellers_price, sup.price as supplier_price, sales.date as prev_month, ((sales.quantity_sold * f.price) - (sales.quantity_sold * sup.price)) as profit FROM `fruits` as f INNER JOIN `supplier` as sup ON f.id = sup.fruit INNER JOIN `sales` as sales ON sales.fruit = f.id WHERE MONTH(sales.date) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH)",
  (err, results) => {
    if (err) {
      throw err;
    }
    results.forEach((element) => {
      console.log("profit", element);
    });
  }
);

db.query(
  "SELECT fruit.type FROM `fruits` as fruit INNER JOIN `sales` as sales_prod WHERE fruit.id = sales_prod.fruit AND YEAR(sales_prod.date) = YEAR(CURRENT_DATE - INTERVAL 1 YEAR) GROUP BY fruit.id HAVING  MIN(sales_prod.quantity_sold) LIMIT 1",
  (err, results) => {
    if (err) {
      throw err;
    }
    results.forEach((element) => {
      console.log("worst selling fruit", element);
    });
  }
);



