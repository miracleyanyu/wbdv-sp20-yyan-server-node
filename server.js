var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./data/db');
// require('./controllers/quiz.controller.server')(app);
require('./controllers/question.controller.server')(app);
require('./controllers/university.controller.server')(app);
require('./controllers/student.controller.server')(app);
require('./controllers/answer.controller.server')(app);

app.get('/', (req, res) => {
  res.send('Assignment 9 NodeJs Server.')
});

app.listen(process.env.PORT || 3000);
