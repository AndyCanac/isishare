const express = require("express");
const router = express.Router();
const { selectAllFrom, selectIdFrom, updateInto , deleteUserHandler} = require("../functions");

router.get("/", (req, res) => {
  selectAllFrom("users", res);
});

router.get("/id/:id", (req, res) => {
  selectIdFrom("users", req.params.id, res);
});

router.all("/update/:id/:colomns/:values", (req, res) => {
  updateInto("users", req.params, res);
});

router.all("/delete/:id", (req, res) => {
  deleteUserHandler("users", req.params, res);
});

module.exports = router;
