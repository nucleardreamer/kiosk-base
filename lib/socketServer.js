module.exports = function(server, ee, test) {
	var fs = require('fs');
	if(!test){
		var io = require('socket.io').listen(server);
	} 
	var request = require('request'),
		qs = require('querystring'),
		Caress = require('caress-server'),
		_ = require('underscore'),
		_socket;

	// enable custom cookies on request
	var j = request.jar();
	request = request.defaults({
		jar: j
	});
	var cookie = null;

	if(!test){
		// socket config
		if (require('os').platform() !== 'win32') {
			io.enable("browser client minification");
			io.enable("browser client etag");
			io.enable("browser client gzip");
		}

		io.set("log level", 1);
		io.set("transports", [
			"websocket",
			"flashsocket",
			"htmlfile",
			"xhr-polling",
			"jsonp-polling"
		]);

		var caress = new Caress('127.0.0.1', 3333, {
			json: true
		});

		io.sockets.on('connection', function(socket) {
			_socket = socket;

			_io.api.init();

			socket.on('api.test', _io.api.test);

			socket.on('init', function(args) {
				console.log(args)
			});

			caress.on('tuio', function(msg) {
				socket.emit('tuio', msg);
			});
		});
	}
	var _io = {
		api: {
			init: function() {
				// do stuff
			},
			test: function(cb) {
				cb({a: 'ok'});
			}
		}
	}

	return _io;
}