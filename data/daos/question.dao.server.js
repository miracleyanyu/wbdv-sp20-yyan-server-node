const QuestionModel = require('../models/Question/question.model.server');

const findAllQuestions = () =>
    QuestionModel.find();

const findQuestionById = (qid) =>
    QuestionModel.findById(qid);

const createQuestion = (question) =>
    QuestionModel.create(question);

const updateQuestion = (qid, question) =>
    QuestionModel.findByIdAndUpdate({_id: qid}, question);

const deleteQuestion = (qid) =>
    QuestionModel.findByIdAndDelete({_id: qid});

module.exports = {
  findAllQuestions,
  findQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion
};
