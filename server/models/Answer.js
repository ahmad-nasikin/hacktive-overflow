var mongoose = require('mongoose')

const answerSchema = new Schema({
author: {Schema.Types.ObjectId, ref: 'User'},
replay: {
  type: String,
  required: [true, 'input your answer']
},
voteup: [{Schema.Types.ObjectId, ref: 'User'}],
votedown: [{Schema.Types.ObjectId, ref: 'User'}],
quetion: {type: Schema.Types.ObjectId, ref: 'Question'}
})

var answer = mongoose.model('Answer', answerSchema)

module.exports = answer
