var express = require('express'),
  app = express(),
  environment = require("dotenv").config(),
  port = process.env.PORT || 3000;
mongoose = require('mongoose'),
  Users = require('./api/models/usersListModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/checkInDB', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var routes = require('./api/routes/usersListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('check-in RESTful API server started on: ' + port);