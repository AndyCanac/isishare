const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3001;

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "isishare_bdd",
});

// Middleware pour le parsing du corps des requêtes en JSON
app.use(express.json());

// Middleware pour le CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Endpoint pour la route racine
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API Express d'isishare !");
});

// endpoint pour la route /api/users
app.get("/api/users", (req, res) => {
  const query = "SELECT * FROM users";
  pool.query(query, (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ error: "An error occurred while executing the query" });
    } else {
      res.json(results);
    }
  });
});

// endpoint pour la route /api/useringroupe
app.get("/api/useringroupe", (req, res) => {
  const query = "SELECT * FROM useringroupe";
  pool.query(query, (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ error: "An error occurred while executing the query" });
    } else {
      res.json(results);
    }
  });
});

const selectAllFrom = (table, res) => {
  const query = `SELECT * FROM ${table}`;
  pool.query(query, (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ error: "An error occurred while executing the query" });
    } else {
      res.json(results);
    }
  });
};

const selectIdFrom = (table, req, res) => {
  const id = Number(req.params.id);
  const idParam = table.charAt(0).toUpperCase() + table.slice(1);
  const query = `SELECT * FROM ${table} WHERE id${idParam} = ${id}`;

  console.log(query);
  pool.query(query, (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ error: "An error occurred while executing the query" });
    } else {
      res.json(results);
    }
  });
};

// endpoint pour la route /api/sources
app.get("/api/sources", (req, res) => {
  selectAllFrom("sources", res);
});

// endpoint pour la route /api/objectifs
app.get("/api/objectifs", (req, res) => {
  selectAllFrom("objectifs", res);
});

// endpoint pour la route /api/interets
app.get("/api/interets", (req, res) => {
  selectAllFrom("interets", res);
});

// endpoint pour la route /api/groupes
app.get("/api/groupes", (req, res) => {
  selectAllFrom("groupes", res);
});

app.get("/api/groupes/:id", (req, res) => {
  selectIdFrom("groupes", req, res);
});

// endpoint pour la route /api/contacts
app.get("/api/contacts", (req, res) => {
  selectAllFrom("contacts", res);
});

// Endpoint pour la route /api/connaissances
app.get("/api/connaissances", (req, res) => {
  selectAllFrom("connaissances", res);
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
