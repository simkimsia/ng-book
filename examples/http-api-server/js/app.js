angular.module('myApp', [])
.controller('FormController', function($scope, $http) {
  $scope.fields = [
    {placeholder: 'Username', isRequired: true},
    {placeholder: 'Password', isRequired: true},
    {placeholder: 'Email (optional)', isRequired: false}
  ];

  $scope.submitForm = function() {
    $http({
      method: 'POST',
      url: 'api/server.php'
    });
  };
});