const express = require('express');
const mongoose = require('mongoose');

const app = express();

const uri = 'mongodb+srv://AmyP:SuperSimple@coinvascluster.mvb0gh3.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB Atlas connection established successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});