const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const validator = require('validator')
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'please input your username']
  },
  email: {
    type: String,
    index: true,
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

userSchema.plugin(uniqueValidator, {message: ' Sudah Ada'});

var user = mongoose.model('User', userSchema)

module.exports = user;
