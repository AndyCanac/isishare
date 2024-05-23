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
const notationsRoutes = require("./routes/notations");

const routes = [
  { path: "/api", route: mainRoutes },

  { path: "/api/users", route: usersRoutes },
  { path: "/api/users/id/:id", route: usersRoutes },
  { path: "/api/users/update/:id/:colomns/:values", route: usersRoutes },

  { path: "/api/usersingroups", route: userInGroupeRoutes },
  { path: "/api/usersingroups/id/:id", route: userInGroupeRoutes },

  { path: "/api/sources", route: sourcesRoutes },
  { path: "/api/sources/id/:id", route: sourcesRoutes },

  { path: "/api/objectifs", route: objectifsRoutes },
  { path: "/api/objectifs/id/:id", route: objectifsRoutes },
  { path: "/api/objectifs/user/:id", route: objectifsRoutes },
  { path: "/api/objectifs/insert/:colomns/:values", route: objectifsRoutes },
  { path: "/api/objectifs/delete/:id", route: objectifsRoutes },

  { path: "/api/knowledge", route: knowledgeRoutes },
  { path: "/api/knowledge/:id", route: knowledgeRoutes },
  { path: "/api/knowledge/user/id/:id", route: knowledgeRoutes },
  { path: "/api/knowledge/insert/:colomns/:values", route: knowledgeRoutes },
  { path: "/api/knowledge/delete/:id", route: knowledgeRoutes },

  { path: "/api/interests", route: interestsRoutes },
  { path: "/api/interests/id/:id", route: interestsRoutes },

  { path: "/api/groups", route: groupsRoutes },
  { path: "/api/groups/id/:id", route: groupsRoutes },

  { path: "/api/contacts", route: contactsRoutes },
  { path: "/api/contacts/id/:id", route: contactsRoutes },
  { path: "/api/contacts/user/:id", route: contactsRoutes },
  { path: "/api/contacts/insert/:colomns/:values", route: contactsRoutes },
  { path: "/api/contacts/delete/:id", route: contactsRoutes },

  { path: "/api/notations", route: notationsRoutes },
  { path: "/api/notations/insert/:colomns/:values", route: notationsRoutes },
];

routes.forEach((route) => {
  app.use(route.path, route.route);
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

module.exports = app;
