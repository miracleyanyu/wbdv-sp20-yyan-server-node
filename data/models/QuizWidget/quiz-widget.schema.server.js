const mongoose = require('mongoose');

const QuestionSchema = require('../Question/question.shema.server');

const QuestionWidgetSchema = mongoose.Schema({
  questions: [{
    type: Number,
    ref: 'QuestionModel'
  }]
}, {collection: 'question-widgets'});

module.exports = QuestionWidgetSchema;
