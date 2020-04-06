const QuestionDao = require('../data/daos/question.dao.server');

// findQuestionsForQuiz = (quizId) =>
//     questions.filter(question => question.quizId === quizId);

const findAllQuestions = () =>
    QuestionDao.findAllQuestions();

const findQuestionById = (qid) =>
    QuestionDao.findQuestionById(qid);

const createQuestion = (question) =>
    QuestionDao.createQuestion(question);

const updateQuestion = (qid, question) =>
    QuestionDao.updateQuestion(qid, question);

const deleteQuestion = (qid) =>
    QuestionDao.deleteQuestion(qid);

module.exports = {
  findAllQuestions,
  findQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion
};
