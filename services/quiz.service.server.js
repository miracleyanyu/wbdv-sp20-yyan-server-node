const mongoose = require('mongoose');

const quizzesSchema = mongoose.Schema({
  title: String
}, {collection: 'quizzes'});

const quizzesModel = mongoose.model('QuizzesModel', quizzesSchema);
quizzesModel.find()
.then(allQuizzes => console.log(allQuizzes));

const findAllQuizzes = () => quizzesModel.find();

const findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id === quizId);

module.exports = {
  findAllQuizzes,
  findQuizById
};
