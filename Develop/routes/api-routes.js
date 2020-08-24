const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/new", (req, res) => {
    res.send("message: success");
});

module.exports = router;