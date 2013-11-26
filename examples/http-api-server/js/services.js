angular.module('myApp',[])
.factory('UserService',function($http) {
  var current_user;
  return {
    getCurrentUser: function() {
      return current_user;
    },
    setCurrentUser: function(user) {
      current_user = user;
    }
  }
});