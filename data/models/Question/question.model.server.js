const mongoose = require('mongoose');

const QuestionSchema = require('./question.shema.server');

module.exports = mongoose.model('QuestionModel', QuestionSchema);
