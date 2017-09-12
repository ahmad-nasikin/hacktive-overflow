var models = require('../models/User')
var bcrypt = require('bcryptjs');
require('dotenv').config()
var jwt = require('jsonwebtoken')

var signup = (req, res) => {
  let password = req.body.password
  bcrypt.genSalt(10, (errSalt, salt) => {
    bcrypt.hash(password, salt, (errHash, hash) => {
      req.body.password = hash
      models.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(data => {
        res.send(' Succes Sign up')
      })
      .catch(err => {
        res.status(400).send({msg: err.message})
      })
    })
  })
}

var signin = (req, res) => {
  models.findOne({
    username: req.body.username
  })
  .then(data => {
    if (data != null) {
      console.log('ini data', data);
      let password = req.body.password
      if (bcrypt.compareSync(password, data.password)) {
        var token = jwt.sign({
          id: data._id,
          username: data.username,
          email: data.email
        }, process.env.SECRET_KEY)
        console.log(token);
        res.send({
          msg: 'Succes Login',
          dataToken: token
        })
      } else {
        res.send('Wrong Password')
      }
    } else {
      res.send('Data Tidak Ada')
    }
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  signup,
  signin
};
