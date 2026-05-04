const mongoose = require('mongoose');

async function connectMongoDB(url){
  mongoose
      .connect(url)
      .then(() => console.log('MongoDB Connected Successfully'))
      .catch((err) => console.log('Error connecting MongoDB'));
}

module.exports = connectMongoDB;