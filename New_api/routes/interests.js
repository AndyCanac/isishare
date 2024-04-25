const express = require('express');
const router = express.Router();
const { selectAllFrom, selectIdFrom } = require('../functions');


router.get('/', (req, res) => {
    selectAllFrom('interests', res);
});

router.get('/:id', (req, res) => {
    selectIdFrom('interests', req.params.id, res);
});

module.exports = router;
