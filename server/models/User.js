const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'please input your username']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'please input your email'],
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: [true, 'please input your password']
  }
})

var user = mongoose.model('User', userSchema)

module.exports = user;
