const express = require("express");
const router = express.Router();
const {
  selectAllFrom,
  selectIdFrom,
  selectIdUserFrom,
  insertInto,
  deleteIdFrom,
} = require("../functions");

router.get("/", (req, res) => {
  selectAllFrom("objectifs", res);
});

router.get("/id/:id", (req, res) => {
  selectIdFrom("objectifs", req.params.id, res);
});

router.get("/user/:id", (req, res) => {
  selectIdUserFrom("objectifs", req.params.id, res);
});

router.all("/insert/:colomns/:values", (req, res) => {
  insertInto("objectifs", req.params, res);
});

router.all("/delete/:id", (req, res) => {
  deleteIdFrom("objectifs", req.params.id, res);
});

module.exports = router;
