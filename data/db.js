const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:cs5610@cluster0-xgr5z.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
// mongoose.connect('mongodb://localhost:27017/whiteboard', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

module.exports = mongoose;
