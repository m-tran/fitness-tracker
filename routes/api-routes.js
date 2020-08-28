const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/public', 'stats.html'));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/public', 'exercise.html'));
});

router.get("/api/workouts", (req, res) => {
    db.Tracker.find().then((workouts) => res.send(workouts));
});

router.put("/api/workouts/:id", (req, res) => {
    db.Tracker.create({ day: req.query.date, exercises: req.body }).then((workouts) => res.send(workouts));
});

router.post("/api/workouts", (req, res) => {
    db.Tracker.create({ day: req.query.date, exercises: req.body }).then((workouts) => res.send(workouts));
});

router.get("/api/workouts/range", (req,res) => {
    db.Tracker.find().then((workouts) => res.send(workouts));
});


module.exports = router;
