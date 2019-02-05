const path = require("path");
const express = require("express");
const router = express.Router();

const secured = require("../middleware/secured");
/* GET home page. */
router.get("/", secured(), function(req, res, next) {
  console.log("Index");
  res.send(path.join(__dirname, "public", "index.html"));
});

module.exports = router;
