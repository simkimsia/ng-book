angular.module('myApp', [])
.directive('ensureUnique', ['$http', '$timeout', '$q', function ($http, $timeout, $q) {
  var checking = null;
  var canceler = null;
  return {
    require: 'ngModel',
    link: function(scope, ele, attrs, c) {
      scope.$watch(attrs.ngModel, function (newVal) {
        if (checking) {
          //Cancel pending request
          $timeout.cancel(checking);
        }
        checking = $timeout(function () {

          if (canceler) {
            //Cancel executing request
            canceler.resolve();
          }
          canceler = $q.defer();

          $http({
            method: 'POST',
            url: '/api/check/' + attrs.ensureUnique,
            data: { 'username': newValue },
            timeout: canceler.promise
          }).success(function(data, status, headers, cfg) {
            c.$setValidity('unique', data.isUnique);
            checking = null;
            canceler = null;
          }).error(function(data, status, headers, cfg) {
            //NB request cancellation appears here too
            checking = null;
            canceler = null;
          });
        }, 500);
      });
    }
  };
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