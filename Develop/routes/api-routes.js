const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models");

router.get("/", (req, res) => {
    res.sendFile(path.resolve("public", "index.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.resolve("public", "stats.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.resolve("public", "exercise.html"));
});

router.get("/new", (req, res) => {
    res.send("message: success");
    db.Tracker.create({ 
        exercise: req.body.text 
    }).then((exercise) => res.send(exercise));
});

module.exports = router;

