// app.js
const express = require("express");
const app = express();
const port = 3001;
const mainRoutes = require("./routes/main");
const usersRoutes = require("./routes/users");
const userInGroupeRoutes = require("./routes/userInGroupe");
const sourcesRoutes = require("./routes/sources");
const objectifsRoutes = require("./routes/objectifs");
const knowledgeRoutes = require("./routes/knowledge");
const interestsRoutes = require("./routes/interests");
const groupsRoutes = require("./routes/groups");
const contactsRoutes = require("./routes/contacts");

const routes = [
  { path: "/api", route: mainRoutes },

  { path: "/api/users", route: usersRoutes },
  { path: "/api/users/:id", route: usersRoutes },

  { path: "/api/usersingroups", route: userInGroupeRoutes },
  { path: "/api/usersingroups/:id", route: userInGroupeRoutes },

  { path: "/api/sources", route: sourcesRoutes },
  { path: "/api/sources/:id", route: sourcesRoutes },

  { path: "/api/objectifs", route: objectifsRoutes },
  { path: "/api/objectifs/:id", route: objectifsRoutes },
  { path: "/api/objectifs/user/:id", route: contactsRoutes },

  { path: "/api/knowledge", route: knowledgeRoutes },
  { path: "/api/knowledge/:id", route: knowledgeRoutes },
  { path: "/api/knowledge/user/:id", route: knowledgeRoutes },

  { path: "/api/interests", route: interestsRoutes },
  { path: "/api/interests/:id", route: interestsRoutes },

  { path: "/api/groups", route: groupsRoutes },
  { path: "/api/groups/:id", route: groupsRoutes },

  { path: "/api/contacts", route: contactsRoutes },
  { path: "/api/contacts/:id", route: contactsRoutes },
  { path: "/api/contacts/user/:id", route: contactsRoutes },
];

routes.forEach((route) => {
  app.use(route.path, route.route);
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

module.exports = app;
