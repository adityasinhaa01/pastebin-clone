const shortid = require('shortid');

const PASTEBIN = require('../Models/schema');

async function genPasteId (req, res) {
  const body = req.body;
  if (!body.content) return res.status(400).json({status: "Bad Request", message: "Cannot paste empty message"});
  const shortID = shortid(8);
  await PASTEBIN.create({
    pasteID: shortID,
    pasteNote: body.content,
    visitHistory: []
  });
  return res.json({pasteID: shortID});
}

module.exports = genPasteId;