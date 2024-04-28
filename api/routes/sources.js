const express = require("express");
const router = express.Router();
const { selectAllFrom, selectIdFrom } = require("../functions");

router.get("/", (req, res) => {
  selectAllFrom("sources", res);
});

router.get("/id/:id", (req, res) => {
  selectIdFrom("sources", req.params.id, res);
});

module.exports = router;
