var connect = require('connect');
var errorhandler = require('errorhandler');

var app = connect();

app.use(function (req, res, next) {
	next(new Error('Hey!'));
});

app.use(function (req, res) {
	res.end('Hello World!');
});

app.use(errorhandler());

app.listen(8080);