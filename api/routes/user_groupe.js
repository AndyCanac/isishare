const express = require("express");
const router = express.Router();
const { selectAllFrom, selectIdFrom, insertInto, deleteIdFrom } = require("../functions");

router.get("/", (req, res) => {
  selectAllFrom("user_group", res);
  // res.send({data : 'useringroups'});
});

router.get("/id/:id", (req, res) => {
  selectIdFrom("user_group", req.params.id, res);
});

router.all("/insert/:colomns/:values", (req, res) => {
  insertInto("user_group", req.params, res);
});

router.all("/delete/:id", (req, res) => {
  deleteIdFrom("user_group", req.params.id, res);
});

module.exports = router;
