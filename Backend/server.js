const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "companymanagement",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM employee";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO employee (`firstname`,`lastname`,`birthday`,`position`,`email`) VALUES(?) ";
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.birthday,
    req.body.position,
    req.body.email,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Created");
  });
});

app.put("/update/:id", (req, res) => {
  const sql =
    "UPDATE employee set `firstname` = ?,`lastname` = ?,`birthday` = ?,`position` = ?,`email` = ? where `id` = ?";

  const id = req.params.id;
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.birthday,
    req.body.position,
    req.body.email,
  ];

  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Update Complete!");
  });
});

app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE from employee where `id` = ?";

  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8088, () => {
  console.log("Listen Port 8088.....");
});
