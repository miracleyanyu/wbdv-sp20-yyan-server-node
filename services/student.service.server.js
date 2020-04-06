const StudentDao = require('../data/daos/student.dao.server');

const findAllStudents = () =>
    StudentDao.findAllStudents();

const findStudentById = (sid) =>
    StudentDao.findStudentById(sid);

const createStudent = (student) =>
    StudentDao.createStudent(student);

const updateStudent = (sid, student) =>
    StudentDao.updateStudent(sid, student);

const deleteStudent = (sid) =>
    StudentDao.deleteStudent(sid);

module.exports = {
  findAllStudents,
  findStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
