const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: {type: String, required: true},
  content: {
    type: String,
    required: [true, 'input your question']
  },
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  answer_id: [{
    type: Schema.Types.ObjectId, ref: 'Answer'
  }],
  voteup: [{type: Schema.Types.ObjectId, ref: 'User'}],
  votedown: [{type: Schema.Types.ObjectId, ref: 'User'}]
})


var question = mongoose.model('Question', questionSchema)

module.exports = question
