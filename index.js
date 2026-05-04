const express = require('express');
require('dotenv').config();

const app = express();

//Middlewares
app.use(express.json());

app.listen(process.env.PORT, (err) => {
  if(err) return res.json('Server Error');
  return res.json({status: "success", message:"Server started successfully"});
})