"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    year: {
        type: String,
        required: [true, "Year is required"]
    },
    make: {
        type: String,
        required: [true, "Make is required"]
    },
    model: {
        type: String,
        required: [true, "Model is required"]
    }
});

let Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;