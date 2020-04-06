const AnswerDao = require('./answer.dao.server');
const QuestionDao = require('./question.dao.server');
const StudentDao = require('./student.dao.server');

const mongoose = require('../db');

const truncateDatabase = () => {
  mongoose.connection.dropCollection('questions', function (err, result) {
    if (err) throw err;
    console.log("Collection 'questions' has been deleted: " + result);
  });
  mongoose.connection.dropCollection('students', function (err, result) {
    if (err) throw err;
    console.log("Collection 'students' has been deleted: " + result);
  });
  mongoose.connection.dropCollection('answers', function (err, result) {
    if (err) throw err;
    console.log("Collection 'answers' has been deleted: " + result);
  })
};

const populateDatabase = () => {
  StudentDao.createStudent({
    _id: 123,
    User: {
      firstName: "Alice",
      lastName: "Wonderland",
      username: "alice",
      password: "alice"
    },
    gradYear: 2020,
    scholarship: 15000
  });
  StudentDao.createStudent({
    _id: 234,
    User: {
      firstName: "Bob",
      lastName: "Hope",
      username: "bob",
      password: "bob"
    },
    gradYear: 2021,
    scholarship: 12000
  });
  QuestionDao.createQuestion({
    _id: 321,
    question: "Is the following schema valid?",
    points: 10,
    questionType: 'TRUE_FALSE',
    trueFalse: {
      isTrue: false
    }
  });
  QuestionDao.createQuestion({
    _id: 432,
    question: "DAO stands for Dynamic Access Object.",
    points: 10,
    questionType: 'TRUE_FALSE',
    trueFalse: {
      isTrue: false
    }
  });
  QuestionDao.createQuestion({
    _id: 543,
    question: "What does JPA stand for?",
    points: 10,
    questionType: 'MULTIPLE_CHOICE',
    multipleChoice: {
      choices: ['Java Persistence API', 'Java Persisted Application',
        'JavaScript Persistence API', 'JSON Persistent Associations'],
      correct: 1
    }
  });
  QuestionDao.createQuestion({
    _id: 654,
    question: "What does ORM stand for?",
    points: 10,
    questionType: 'MULTIPLE_CHOICE',
    multipleChoice: {
      choices: ['Object Relational Model', 'Object Relative Markup',
        'Object Reflexive Model', 'Object Relational Mapping'],
      correct: 4
    }
  });
  AnswerDao.answerQuestion(123, 321, {
    _id: 123,
    trueFalseAnswer: true,
    multipleChoiceAnswer: null
  });
  AnswerDao.answerQuestion(123, 432, {
    _id: 234,
    trueFalseAnswer: false,
    multipleChoiceAnswer: null
  });
  AnswerDao.answerQuestion(123, 543, {
    _id: 345,
    trueFalseAnswer: null,
    multipleChoiceAnswer: 1
  });
  AnswerDao.answerQuestion(123, 654, {
    _id: 456,
    trueFalseAnswer: null,
    multipleChoiceAnswer: 2
  });
  AnswerDao.answerQuestion(234, 321, {
    _id: 567,
    trueFalseAnswer: false,
    multipleChoiceAnswer: null
  });
  AnswerDao.answerQuestion(234, 432, {
    _id: 678,
    trueFalseAnswer: true,
    multipleChoiceAnswer: null
  });
  AnswerDao.answerQuestion(234, 543, {
    _id: 789,
    trueFalseAnswer: null,
    multipleChoiceAnswer: 3
  });
  AnswerDao.answerQuestion(234, 654, {
    _id: 890,
    trueFalseAnswer: null,
    multipleChoiceAnswer: 4
  });
};

module.exports = {
  truncateDatabase,
  populateDatabase
};
