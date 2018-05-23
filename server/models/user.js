var mongoose = require('mongoose');

/*Schema for user model*/
var User = mongoose.model('User', {
  email: {
    type: String,
    minlength: 1,
    required: true,
    trim: true,
  }
});

module.exports = {
  User
};
