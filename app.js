var express = require('express'),
    app = express.createServer(express.logger()),
    io = require('socket.io').listen(app),
    routes = require('./routes');

// Configuration

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

// Heroku won't actually allow us to use WebSockets so we have to setup polling instead.
// https://devcenter.heroku.com/articles/using-socket-io-with-node-js-on-heroku
io.configure(function () {
  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 10);
});

// Routes

var port = process.env.PORT || 5000; // Use the port that Heroku provides or default to 5000
app.listen(port, function() {
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

app.get('/', routes.index);

var newRed;
var newGreen;
var newBlue;

var redBG;
var greenBG;
var blueBG;

io.sockets.on('connection', function(socket) {
	socket.on('sendScreenUpdate', function(screen, red, green, blue) {
		io.sockets.emit('recieveUpdate', screen, red, green, blue);
	});
	socket.on('updateRed', function(totalRed){
		newRed=totalRed;
		io.sockets.emit('updateBackground', newRed, newGreen, newBlue);
	});
	socket.on('updateGreen', function(totalGreen){
		newGreen=totalGreen;
		io.sockets.emit('updateBackground', newRed, newGreen, newBlue);
	});
	socket.on('updateBlue', function(totalBlue){
		newBlue=totalBlue;
		io.sockets.emit('updateBackground', newRed, newGreen, newBlue);
	});
});