const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please supply a name',
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: 'Please Supply an email address',
  },

});

module.exports = mongoose.model('User', userSchema);
