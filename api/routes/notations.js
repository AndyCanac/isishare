const express = require("express");
const router = express.Router();
const {
  selectAllFrom,
  insertInto,
} = require("../functions");

router.get("/", (req, res) => {
  selectAllFrom("notations", res);
});

router.all("/insert/:colomns/:values", (req, res) => {
  insertInto("notations", req.params, res);
});


module.exports = router;
