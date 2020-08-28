const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrackerSchema = new Schema({
    exercises: {
        type: String,
        name: String,
        distance: Number,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
    },
},
{ typeKey: '$type' }
);

const Tracker = mongoose.model("Tracker", TrackerSchema);

module.exports = Tracker;
