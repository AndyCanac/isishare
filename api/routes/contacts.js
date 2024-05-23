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
  selectAllFrom("contacts", res);
});

router.get("/id/:id", (req, res) => {
  selectIdFrom("contacts", req.params.id, res);
});

router.get("/user/:id", (req, res) => {
  selectIdUserFrom("contacts", req.params.id, res);
});

router.all("/insert/:colomns/:values", (req, res) => {
  insertInto("contacts", req.params, res);
});

router.all("/delete/:id", (req, res) => {
  deleteIdFrom("contacts", req.params.id, res);
});

module.exports = router;
