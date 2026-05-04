const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const router = require('./Routes/routes');
const connectMongoDB = require('./connection');
const schema = require('./Models/schema');


connectMongoDB(process.env.MONGO_URL);

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/', router);

app.get('/:pasteID', async (req, res) => {
  const pasteID = req.params.pasteID;
  const note = await schema.findOneAndUpdate({pasteID},
    {$push: {visitHistory: {timestamps:new Date().toLocaleString()}}});
  if(!note) return res.status(404).json({status: "Not Found", message: "No such note found!"});
  return res.status(200).json({message: note.pasteNote});
  });

// server
app.listen(process.env.PORT, (err) => {
  if(err) console.log('Server Error');
  console.log('Server Started');
})