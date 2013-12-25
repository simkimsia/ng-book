angular.module('myApp', [])
.directive('ensureUnique', ['$http', '$timeout', function($http, $timeout) {
  var checking = null;
  return {
    require: 'ngModel',
    link: function(scope, ele, attrs, c) {
      scope.$watch(attrs.ngModel, function(newVal) {
        if (!checking) {
          checking = $timeout(function() {
            if (typeof (scope.signup) != 'undefined' &&
              typeof (scope.signupusername) != 'undefined') {
              $http({
                method: 'POST',
                url: '/api/check/' + attrs.ensureUnique,
                data: {'username': scope.signup.username} // this does not work
              }).success(function(data, status, headers, cfg) {
                c.$setValidity('unique', data.isUnique);
                checking = null;
              }).error(function(data, status, headers, cfg) {
                checking = null;
              });
            }// end if scope.signup.username is defined
          }, 500);
        }
      });
    }
  }
}])
/*
.directive('ngFocus', [function() {
  var FOCUS_CLASS = "ng-focused";
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ctrl) {
      ctrl.$focused = false;
      element.bind('focus', function(evt) {
        element.addClass(FOCUS_CLASS);
        scope.$apply(function() {ctrl.$focused = true;});
      }).bind('blur', function(evt) {
        element.removeClass(FOCUS_CLASS);
        scope.$apply(function() {ctrl.$focused = false;});
      });
    }
  }
}])
*/
.controller('signupController', ['$scope', function($scope) {
  $scope.submitted = false;
  $scope.signupForm = function() {
    if ($scope.signup_form.$valid) {
      // Submit as normal
    } else {
      $scope.signup_form.submitted = true;
    }
  }
}]);