angular.module("myApp", ['emailParser'])
.controller('MyController',
  ['$scope', 'EmailParser',
    function($scope, EmailParser) {
      // Set up a watch
      $scope.$watch('emailBody', function(body) {
        if (body) {
          var template = $interpolate(body);
          $scope.previewText = EmailParser.parse(body, {
            to: $scope.to
          });
        }
      });// end $scope.$watch('emailBody'...
    }// end function ($scope)
  ] // end ['$scope...
);// end controller('MyController'...

angular.module('emailParser',[])
.config(['$interpolateProvider',function($interpolateProvider) {
  $interpolateProvider.startSymbol('__');
  $interpolateProvider.endSymbol('__');
}])
.factory('EmailParser',['$interpolate',
  function($interpolate) {
    // a service to handle parsing
    return {
      parse: function(text, context) { 
        var template = $interpolate(text);
        return template(context);
      }// end parse
    }// end return
}]);// end factory('EmailParser' ...