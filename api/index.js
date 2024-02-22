const express = require('express');
const mariadb = require('mariadb');

const connection = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "isishare_bdd",
  connectionLimit: 100,
});

const app = express();

app.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});

app.get("/users",(req,res) => {
  const i=req.query.id;
  if(i == null) //voir si on met un parametre avec blablabla ?id=1
  {
      connection.query(`SELECT * FROM users`, (err,rows) => 
      {
          if(!err)
              res.send(rows);
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