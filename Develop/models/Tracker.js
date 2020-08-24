const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrackerSchema = new Schema({
    text: {
        type: String,
        trim: true,
        required: "String is required"
    }
});

const Tracker = mongoose.model("Tracker", TrackerSchema);

module.exports = Tracker;