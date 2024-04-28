const express = require("express");
const router = express.Router();
const { selectAllFrom, selectIdFrom } = require("../functions");

router.get("/", (req, res) => {
  selectAllFrom("usersingroups", res);
  // res.send({data : 'useringroups'});
});

router.get("/id/:id", (req, res) => {
  selectIdFrom("usersingroups", req.params.id, res);
});

module.exports = router;
