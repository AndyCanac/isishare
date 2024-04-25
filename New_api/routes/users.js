const express = require('express');
const router = express.Router();
const { selectAllFrom, selectIdFrom } = require('../functions');

router.get('/', (req, res) => {
    selectAllFrom('users', res);
    // res.send({data : 'users'});
});

router.get('/:id', (req, res) => {
    selectIdFrom('users', req, res);
});

module.exports = router;
