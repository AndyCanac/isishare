const express = require("express");
const router = express.Router();
const {
  selectAllFrom,
  selectIdFrom,
  selectIdUserFrom,
} = require("../functions");

router.get("/", (req, res) => {
  selectAllFrom("knowledge", res);
});

router.get("/:id", (req, res) => {
  selectIdFrom("knowledge", req.params.id, res);
});

router.get("/user/:id", (req, res) => {
  selectIdUserFrom("knowledge", req.params.id, res);
});

module.exports = router;
