const mongoose = require('mongoose');

const UserSchema = require('../User/user.schema.server');

const StudentSchema = mongoose.Schema({
  _id: Number,
  User: UserSchema,
  gradYear: Number,
  scholarship: Number
}, {collection: 'students'});

module.exports = StudentSchema;
