const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdOn:{
    type: Date,
    default: Date.now
  }
});


const user = mongoose.model('User', userSchema);

module.exports = user;