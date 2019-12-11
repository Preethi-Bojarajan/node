let mongoose = require('mongoose');

let connection;

function openConnection() {
    try {
      process.env.MONGO_URL = 'mongodb://192.168.1.34:27017/hrms_book';
      if (connection) return mongoose;
  
      mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true
      }).then((result) => {
        console.log(`MongoDB Connection to ${process.env.MONGO_URL} sucessfull`);
      }).catch((err) => {
        console.log('Failed to connect to MongoDB', err.stack);
      });
      connection = mongoose.connection;
      return mongoose;
    } catch (error) {
      console.log(error);
    }
  }
  
  function closeDbConnection() {
    connection.close();
  }

  module.exports = openConnection();
  
const bookMaster = require('../models/bookMaster');