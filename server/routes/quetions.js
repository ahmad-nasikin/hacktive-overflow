var express = require('express');
var router = express.Router();
var questionController = require('../controllers/questionControll')

/* GET users listing. */
router.post('/', questionController.createQuestion);
router.get('/', questionController.getAllQuestion)
router.delete('/:id', questionController.deleteQuestion)


module.exports = router;
