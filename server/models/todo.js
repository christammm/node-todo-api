var mongoose = require('mongoose');


//Create the Schema for TODO, or create a 'TODO' Model
var Todo = mongoose.model('Todo', {
  //The schema of the TODO
  text: { //Name
    type: String, //datatype
    //set validators for each field, it will catch errors
    required: true,
    minlength: 1,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null,
  }
});

module.exports = {
  Todo
};
