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
      })
  }
  else
  {
      connection.query(`SELECT idUser, nameUser, pointsUser, informationContact, idSource, libelleSource, iconSource
                        FROM users
                        LEFT JOIN contacts ON users.idUser = contacts.user
                        LEFT JOIN sources ON sources.idSource = contacts.source
                        WHERE idUser = ${i}`, (err, rows) =>
      {
          if(!err)
              res.send(rows);
      })
  }
});

app.get("/contacts", (req, res) => {
    const i = req.query.id;
    if (i == null) //voir si on met un parametre avec blablabla ?id=1
    {
        connection.query(`SELECT idContact, informationContact, libelleSource, iconSource
                        FROM contacts
                        LEFT JOIN sources ON sources.idSource = contacts.source`, (err, rows) => {
            if (!err)
                res.send(rows);
        })
    }
    else {
        connection.query(`SELECT idContact, informationContact, libelleSource, iconSource
                        FROM contacts
                        LEFT JOIN sources ON sources.idSource = contacts.source
                        WHERE user = ${i}`, (err, rows) => {
            if (!err)
                res.send(rows);
        })
    }
});

app.get("/skills", (req, res) => {
    const i = req.query.id;
    if (i == null) //voir si on met un parametre avec blablabla ?id=1
    {
        // connection.query(`SELECT idContact, informationContact, libelleSource, iconSource
        //                 FROM contacts
        //                 LEFT JOIN sources ON sources.idSource = contacts.source`, (err, rows) => {
        //     if (!err)
        //         res.send(rows);
        // })
    }
    else {
        connection.query(`SELECT idConnaissance, descriptionConnaissance, lienConnaissance, iconInteret
                        FROM connaissances
                        LEFT JOIN interets ON interets.idInteret = connaissances.interet
                        WHERE user = ${i}`, (err, rows) => {
            if (!err)
                res.send(rows);
        })
    }
});