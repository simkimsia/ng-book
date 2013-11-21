angular.module("myApp",[])
.run(['$rootScope', function($rootScope) {
    $rootScope.movie = "Duck Tails";
}]);