const shortid = require('shortid');

const PASTEBIN = require('../Models/schema');

async function genPasteId (req, res) {
  const body = req.body;
  if (!body.content) return res.status(400).json({status: "Bad Request", message: "Cannot paste empty message"});
  
}