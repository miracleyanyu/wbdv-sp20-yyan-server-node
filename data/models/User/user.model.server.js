const mongoose = require('mongoose');

const UserSchema = require('./user.schema.server');

module.exports = mongoose.model('UserModel', UserSchema);

