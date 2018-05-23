var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


var app = express();

//POST to Create
//GET to retrieve

app.use(bodyParser.json());

//URL is important for REST for resource creation
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
  });

  todo.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.send(e);
  });

  console.log(req.body);
});

app.listen(3000, () =>{
  console.log('Starting on port 3000');
})
