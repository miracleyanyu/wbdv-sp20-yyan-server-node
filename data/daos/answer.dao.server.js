const AnswerModel = require('../models/Answer/answer.model.server');

const findAllAnswers = () =>
    AnswerModel.find();

const findAnswerById = (aid) =>
    AnswerModel.findById(aid);

const findAnswersByStudent = (sid) =>
    AnswerModel.find({
      student: {
        _id: sid
      }
    });

const findAnswersByQuestion = (qid) =>
    AnswerModel.find({
      question: {
        _id: qid
      }
    });

const findAnswersByQuestionAndStudent = (sid, qid) =>
    AnswerModel.find({
      student: {
        _id: sid
      },
      question: {
        _id: qid
      }
    });

const answerQuestion = (sid, qid, answer) =>
    AnswerModel.create({
      ...answer,
      'student': sid,
      'question': qid
    });

module.exports = {
  findAllAnswers,
  findAnswerById,
  findAnswersByStudent,
  findAnswersByQuestion,
  answerQuestion,
  findAnswersByQuestionAndStudent
};


