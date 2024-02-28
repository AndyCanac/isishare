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

app.get("/contacts", (req, res) => {
    const i = req.query.id;
    if (i == null) //voir si on met un parametre avec blablabla ?id=1
    {
        connection.query(`SELECT idContact, informationContact, iconSource
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
        connection.query(`SELECT idConnaissance, descriptionConnaissance, niveauConnaissance, lienConnaissance, iconInteret
                        FROM connaissances
                        LEFT JOIN interets ON interets.idInteret = connaissances.interet
                        WHERE user = ${i}`, (err, rows) => {
            if (!err)
                res.send(rows);
        })
    }
});

app.get("/wtl", (req, res) => {
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
        connection.query(`SELECT idObjectif, descriptionObjectif, iconInteret
                        FROM objectifs
                        LEFT JOIN interets ON interets.idInteret = objectifs.interet
                        WHERE user = ${i}`, (err, rows) => {
            if (!err)
                res.send(rows);
        })
    }
});

app.get("/users",(req,res) => {
  const i=req.query.id;
  if(i == null) //voir si on met un parametre avec blablabla ?id=1
  {
      connection.query(`SELECT 
                            users.nameUser,
                            GROUP_CONCAT(DISTINCT objectifs.descriptionObjectif SEPARATOR ', ') AS descriptionObjectif,
                            GROUP_CONCAT(DISTINCT connaissances.descriptionConnaissance SEPARATOR ', ') AS descriptionConnaissance,
                            GROUP_CONCAT(DISTINCT groupes.libelleGroupe SEPARATOR ', ') AS libelleGroupe,
                            users.pointsUser,
                            users.notationUser
                        FROM 
                            users
                        LEFT JOIN 
                            connaissances ON users.idUser = connaissances.user
                        LEFT JOIN 
                            objectifs ON users.idUser = objectifs.user
                        LEFT JOIN 
                            useringroupe ON users.idUser = useringroupe.user
                        LEFT JOIN 
                            groupes ON useringroupe.groupe = groupes.idGroupe
                        GROUP BY 
                            users.idUser;`,
      (err,rows) => {
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