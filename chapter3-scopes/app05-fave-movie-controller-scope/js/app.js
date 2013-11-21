angular.module("myApp",[])
.controller('MyController',
['$scope', function($scope) {
  $scope.movie = "Duck Tails";
}]);