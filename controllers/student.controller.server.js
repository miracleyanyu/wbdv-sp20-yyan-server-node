const StudentService = require('../services/student.service.server');

module.exports = (app) => {
  app.post('/api/students', (req, res) => {
    const newStudent = req.body;
    StudentService.createStudent(newStudent)
      .then(student => res.send(student));
  });
  app.get('/api/students', (req, res) => {
    StudentService.findAllStudents()
      .then(students => res.json(students))
  });
  app.get('/api/students/:id', (req, res) => {
    StudentService.findStudentById(req.params['id'])
      .then(student => res.json(student))
  });
  app.put('/api/students/:id', (req, res) => {
    StudentService.updateStudent(req.params['id'], req.body)
    .then(student => res.json(student))
  });
  app.delete('/api/students/:id', (req, res) => {
    StudentService.deleteStudent(req.params['id'])
    .then(res.send("Successfully deleted."))
  });
};
