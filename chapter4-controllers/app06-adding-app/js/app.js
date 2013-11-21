var app = angular.module('app',[]);

app.controller('FirstCtrl', ['$scope', function($scope) { 
  $scope.counter = 0;
  $scope.add = function(amount) { $scope.counter += amount; };
  $scope.subtract = function(amount) { $scope.counter -= amount; };
}]);