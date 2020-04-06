const mongoose = require('mongoose');

const QuizWidgetSchema = require('./quiz-widget.schema.server');

module.exports = mongoose.model('QuizWidgetModel', QuizWidgetSchema);
