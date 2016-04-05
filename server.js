var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var todoRouter = require('./app/routers/todo');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Router */
app.use('/todo', todoRouter);

/* DB Connection */
mongoose.connect('mongodb://localhost/crud');
mongoose.connection.on("connected", function() {
  console.log("Connected to DB!");
});

app.listen(3000, function() {
	console.log('Express server listening on port 3000');
});