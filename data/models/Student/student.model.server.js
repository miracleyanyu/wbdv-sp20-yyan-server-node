const mongoose = require('mongoose');

const StudentSchema = require('./student.schema.server');

module.exports = mongoose.model('StudentModel', StudentSchema);
