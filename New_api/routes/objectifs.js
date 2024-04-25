const express = require("express");
const router = express.Router();
const {
  selectAllFrom,
  selectIdFrom,
  selectIdUserFrom,
} = require("../functions");

router.get("/", (req, res) => {
  selectAllFrom("objectifs", res);
});

router.get("/:id", (req, res) => {
  selectIdFrom("objectifs", req.params.id, res);
});

router.get("/user/:id", (req, res) => {
  selectIdUserFrom("objectifs", req.params.id, res);
});

module.exports = router;
