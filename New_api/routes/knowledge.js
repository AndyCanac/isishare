const express = require('express');
const router = express.Router();
const { selectAllFrom, selectIdFrom } = require('../functions');


router.get('/', (req, res) => {
    selectAllFrom('knowledge', res);
});

router.get('/:id', (req, res) => {
    selectIdFrom('knowledge', req.params.id, res);
});

module.exports = router;
