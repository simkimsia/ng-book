var app = angular.module('app',[]);

app.controller('ParentController', function($scope) {
  $scope.person = {greeted: false};
});

app.controller('ChildController', function($scope) {
  $scope.sayHello = function() {
    $scope.person.name = "Ari Lerner"; 
    $scope.person.greeted = true;
  }
});