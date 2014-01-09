// main.prototype.event = function(namespace) {
// 		var _this = this;
// 		return {
// 			listen: function(func, toserver) {
// 				if (typeof toserver !== undefined && toserver == true) {
// 					_this.socket.on(namespace, func);
// 				}
// 				_ee.addListener(namespace, func);
// 				return this;
// 			},
// 			push: function(msg, toserver) {
// 				if (debug) console.log('EVENT: ' + namespace + ' ' + JSON.stringify(msg));
// 				if (typeof toserver !== undefined && toserver == true) {
// 					_this.socket.emit(namespace, msg);
// 				}
// 				_ee.emit(namespace, msg);
// 				return this;
// 			},
// 			respush: function() {
// 				var args = _.flatten(new Array(namespace, arguments));
// 				_this.socket.emit.apply(_this.socket, args);
// 				return this;
// 			}
// 		}
// 	}

var app = angular.module('kiosk', ['ngRoute', 'kiosk.controllers']);

app.run(function($rootScope) {
    $rootScope._socket = io.connect('http://'+document.location.hostname+':' + port);
	//$rootScope.socket.on('tuio', function(e){console.log(e)});
	$rootScope._caress = new Caress.Client({
		host: 'localhost',
		port: port,
		socket: $rootScope._socket
	});
	$rootScope._caress.connect();
});

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/index',
		controller: 'IndexController'
	}).otherwise({
		redirectTo: '/'
	});
}]).config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
}]);


