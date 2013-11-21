var app = angular.module('app',[]);

app.controller('MyCtrl', function($scope) {
  $scope.person = {
    name: "Ari Lerner"
  };
});