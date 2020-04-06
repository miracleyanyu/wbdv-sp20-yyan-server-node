const AnswerDao = require('../data/daos/answer.dao.server');

const findAllAnswers = () =>
    AnswerDao.findAllAnswers();

const findAnswerById = (aid) =>
    AnswerDao.findAnswerById(aid);

const findAnswersByStudent = (sid) =>
    AnswerDao.findAnswersByStudent(sid);

const findAnswersByQuestion = (qid) =>
    AnswerDao.findAnswersByQuestion(qid);

const answerQuestion = (sid, qid, answer) =>
    AnswerDao.answerQuestion(sid, qid, answer);

const findAnswersByQuestionsAndStudents = (qid, sid) =>
    AnswerDao.findAnswersByQuestionAndStudent(sid, qid);

module.exports = {
  findAllAnswers,
  findAnswerById,
  findAnswersByStudent,
  findAnswersByQuestion,
  answerQuestion,
  findAnswersByQuestionsAndStudents
};


