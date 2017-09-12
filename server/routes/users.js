var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControll')
var model = require('../models/User')

/* GET users listing. */
router.post('/signup', userController.signup);
router.post('/signin', userController.signin)


module.exports = router;
