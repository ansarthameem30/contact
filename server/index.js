const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "local123",
  database: "crud_contact",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO contact_db (name, email, contact) VALUES('Ansar','ansar@gmail.com',1234567890)";
  db.query(sqlInsert, (error, result) => {
    console.log(error);
    console.log(result);
    res.send("Hello World");
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
