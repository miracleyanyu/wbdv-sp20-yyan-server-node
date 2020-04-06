const questionService = require("../services/question.service.server");

module.exports = (app) => {
  // app.get('/api/quizzes/:qid/questions', (req, res) => {
  //   const quizId = req.params['qid'];
  //   const questions = questionService.findQuestionsForQuiz(quizId);
  //   res.json(questions)
  // })
  app.post('/api/questions', (req, res) => {
    questionService.createQuestion(req.body)
      .then(question => res.send(question))
  });
  app.get('/api/questions', (req, res) => {
    questionService.findAllQuestions()
    .then(questions => res.json(questions))
  });
  app.get('/api/questions/:id', (req, res) => {
    questionService.findQuestionById(req.params['id'])
    .then(question => res.json(question))
  });
  app.put('/api/questions/:id', (req, res) => {
    questionService.updateQuestion(req.params['id'], req.body)
    .then(question => res.json(question))
  });
  app.delete('/api/questions/:id', (req, res) => {
    questionService.deleteQuestion(req.params['id'])
    .then(res.send("Successfully deleted."))
  });
};
