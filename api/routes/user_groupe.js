const express = require("express");
const router = express.Router();
const { selectAllFrom, selectIdFrom } = require("../functions");

router.get("/", (req, res) => {
  selectAllFrom("user_group", res);
  // res.send({data : 'useringroups'});
});

router.get("/id/:id", (req, res) => {
  selectIdFrom("user_group", req.params.id, res);
});

module.exports = router;
