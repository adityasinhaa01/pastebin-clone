const mongoose = require('mongoose');

const schema = new mongoose.schema({
  pasteID: {type: String, required: true, unique: true},
  pasteNote: {type: String, required: true},
  visitHistory: [{timestaqmps: {type: Number}}]
}, {timestamps: true});

const PASTEBIN = mongoose.model("pastebin", schema);

module.exports = PASTEBIN;