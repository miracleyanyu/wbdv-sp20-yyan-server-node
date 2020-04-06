const StudentModel = require('../models/Student/student.model.server');

const findAllStudents = () =>
    StudentModel.find();

const findStudentById = (sid) =>
    StudentModel.findById(sid);

const createStudent = (student) =>
    StudentModel.create(student);

const updateStudent = (sid, student) =>
    StudentModel.findByIdAndUpdate({_id: sid}, student);

const deleteStudent = (sid) =>
    StudentModel.findByIdAndDelete({_id: sid});

module.exports = {
  findAllStudents,
  findStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
