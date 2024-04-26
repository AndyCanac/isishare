// main.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API Express d\'isishare !');
});

module.exports = router;
