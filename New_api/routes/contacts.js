const express = require("express");
const router = express.Router();
const {
  selectAllFrom,
  selectIdFrom,
  selectIdUserFrom,
} = require("../functions");

router.get("/", (req, res) => {
  selectAllFrom("contacts", res);
});

router.get("/:id", (req, res) => {
  selectIdFrom("contacts", req.params.id, res);
});

router.get("/user/:id", (req, res) => {
  selectIdUserFrom("contacts", req.params.id, res);
});

module.exports = router;
