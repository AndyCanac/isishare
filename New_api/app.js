// app.js
const express = require('express');
const app = express();
const port = 3001;
const mainRoutes = require('./routes/main');
const usersRoutes = require('./routes/users');
const userInGroupeRoutes = require('./routes/userInGroupe');
const sourcesRoutes = require('./routes/sources');
const objectifsRoutes = require('./routes/objectifs');
const knowledgeRoutes = require('./routes/knowledge');
const interestsRoutes = require('./routes/interests');
const groupsRoutes = require('./routes/groups');
const contactsRoutes = require('./routes/contacts');

const routes = [
    { path: '/api', route: mainRoutes },

    { path: '/api/users', route: usersRoutes },
    { path: '/api/:id', route: usersRoutes},

    { path: '/api/usersingroups', route: userInGroupeRoutes },
    { path: '/api/:id', route: userInGroupeRoutes},

    { path: '/api/sources', route: sourcesRoutes },
    { path: '/api/:id', route: sourcesRoutes},

    { path: '/api/objectifs', route: objectifsRoutes },
    { path: '/api/:id', route: objectifsRoutes},

    { path: '/api/knowledge', route: knowledgeRoutes },
    { path: '/api/:id', route: knowledgeRoutes},

    { path: '/api/interests', route: interestsRoutes },
    { path: '/api/:id', route: interestsRoutes},

    { path: '/api/groups', route: groupsRoutes },
    { path: '/api/:id', route: groupsRoutes},

    { path: '/api/contacts', route: contactsRoutes },
    { path: '/api/:id', route: contactsRoutes}
];

routes.forEach(route => {
    app.use(route.path, route.route);
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

module.exports = app;