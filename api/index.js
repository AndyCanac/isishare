const express = require('express');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "isishare_bdd",
  connectionLimit: 100,
});

const app = express();

app.listen(3001, () => {
  console.log('Serveur en écoute sur le port 3001');
});

app.get("/users",(req,res) => {
  const i=req.query.id;
  if(i == null) //voir si on met un parametre avec blablabla ?id=1
  {
      connection.query(`SELECT * FROM users`, (err,rows) => 
      {
          if(!err)
              res.send(rows);
          else res.send(err);
      })
  }

  else
  {
      connection.query(`SELECT * FROM users WHERE idUser = ${i}`, (err,rows) =>
      {
          if(!err)
              res.send(rows);
      })
  }
});