var directives = angular.module('kiosk.directives', []);
directives.directive('hello', function () {
	return {
		restrict: 'E',
		template: '<p>Hello from this directive</p>'
	};
});