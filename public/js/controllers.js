var controllers = angular.module('kiosk.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope, $rootScope) {
    $scope.message = 'waddap';
    $scope.name = 'kiosk';
    
}]);