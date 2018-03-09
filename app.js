/**
 * Environment Variables.
 */
require('dotenv').config();
/**
 * Module dependencies.
 */
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});
} else {
  mongoose.connect(process.env.MONGODB_TEST_URL);
}
process.on('SIGNT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disonnected through application termination');
    process.exit(0);
  });
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

//routes

app.use(require('./app/routes'));

module.exports = app;
