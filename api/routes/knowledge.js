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
  selectAllFrom("knowledge", res);
});

router.get("/id/:id", (req, res) => {
  selectIdFrom("knowledge", req.params.id, res);
});

router.get("/user/:id", (req, res) => {
  selectIdUserFrom("knowledge", req.params.id, res);
});

router.all("/insert/:colomns/:values", (req, res) => {
  insertInto("knowledge", req.params, res);
});

router.all("/delete/:id", (req, res) => {
  deleteIdFrom("knowledge", req.params.id, res);
});

module.exports = router;
