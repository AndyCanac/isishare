const express = require('express');
const router = express.Router();
const { selectAllFrom, selectIdFrom } = require('../functions');


router.get('/', (req, res) => {
    selectAllFrom('objectifs', res);
});

router.get('/:id', (req, res) => {
    selectIdFrom('objectifs', req.params.id, res);
});

module.exports = router;
