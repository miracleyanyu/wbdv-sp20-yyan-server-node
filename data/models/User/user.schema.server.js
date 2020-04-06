const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String
});

module.exports = UserSchema;
