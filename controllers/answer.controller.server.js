const AnswerService = require('../services/answer.service.server');

module.exports = (app) => {
  app.post('/api/students/:sid/questions/:qid/answers', (req, res) => {
    AnswerService.answerQuestion(req.params['sid'], req.params['qid'], req.body)
      .then(answer => res.send(answer))
  });
  app.get('/api/students/:sid/questions/:qid/answers', (req, res) => {
    AnswerService.findAnswersByQuestionsAndStudents(req.params['qid'], req.params['sid'])
      .then(answers => res.json(answers))
  });
  app.get('/api/questions/:qid/students/:sid/answers', (req, res) => {
    AnswerService.findAnswersByQuestionsAndStudents(req.params['qid'], req.params['sid'])
      .then(answers => res.json(answers))
  })
};
