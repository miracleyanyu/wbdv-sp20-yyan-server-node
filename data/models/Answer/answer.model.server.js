const mongoose = require('mongoose');

const AnswerSchema = require('./answer.schema.server');

module.exports = mongoose.model('AnswerModel', AnswerSchema);
