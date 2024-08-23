const express = require("express");
const router = express.Router();
const { selectAllFrom, selectIdFrom,  insertInto  } = require("../functions");

router.get("/", (req, res) => {
  selectAllFrom("groups", res);
});

router.get("/id/:id", (req, res) => {
  selectIdFrom("groups", req.params.id, res);
});

router.all("/insert/:colomns/:values", (req, res) => {
  insertInto("groups", req.params, res);
});

module.exports = router;
