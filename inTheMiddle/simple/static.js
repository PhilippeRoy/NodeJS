var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();

app.use(serveStatic(__dirname + '/public'));

app.use(function (req, res) {
	res.end('Hello World!');
});

app.listen(8080);



