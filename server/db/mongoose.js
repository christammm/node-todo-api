var mongoose = require('mongoose');

//set mongo to use Promises
mongoose.Promise = global.Promise;
//Mongo takes callback while mongoose is more complex.
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = {mongoose};
