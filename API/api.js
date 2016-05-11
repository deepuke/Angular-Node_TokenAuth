var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var cors = require('cors');

var User = require('./models/User.js');

app.use(bodyParser.json());
app.use(cors());



app.post('/register', function(req, res) {
	var user = req.body;
	
	console.log(user);
	
	var newUser = new User.model({
		email : user.email,
		password : user.password
	});

	newUser.save(function(err) {
		res.status(200).json(newUser);
	});
});

app.get('/', function(req, res) {
	res.send('Hello world');
});
mongoose.connect('mongodb://localhost/psjwt');
var server = app.listen('3000', function() {
	console.log('api listening at PORT :' + server.address().port);
});
