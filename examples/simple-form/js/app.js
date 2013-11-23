angular.module('myApp', [])
.controller('FormController', function($scope) {
  $scope.fields = [
    {placeholder: 'Username', isRequired: true},
    {placeholder: 'Password', isRequired: true},
    {placeholder: 'Email (optional)', isRequired: false}
  ];

  $scope.submitForm = function() {
    alert("it works!");
  };
});