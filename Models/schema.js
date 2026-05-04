const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  pasteID: {type: String, required: true, unique: true},
  pasteNote: {type: String, required: true},
  visitHistory: [{timestamps: {type: String}}]
}, {timestamps: true});

const PASTEBIN = mongoose.model("pastebin", schema);

module.exports = PASTEBIN;