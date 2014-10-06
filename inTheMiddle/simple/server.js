//modules
var http = require('http');
var connect = require('connect');
var morgan = require('morgan');

//Custom middlesware moduels
var helloWorld = require('./simpleHello');
var writeHeader = require('./header');
var replyText = require('./replyText');
var saveRequest = require('./saveRequest');
var errorCreator = require('./throwError');
var errorHandler = require('./errorHandler');

//Middleware
var r = replyText('Hey Phil!');
//Server
var app = connect();

app.use(morgan('combined'));
//app.use(errorCreator());
app.use(saveRequest(__dirname + '/requests'));
app.use(writeHeader('X-Powered-By', 'Node'));
app.use(r);
app.use(errorHandler());



http.createServer(app).listen(8080);