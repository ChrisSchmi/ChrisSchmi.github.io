var app = angular.module("miniblog", []);

app.controller("PostsController", function($scope, $http) {
  $http.get('https://chrisschmi.github.io/scripts/posts.json').
    success(function(data, status, headers, config) {
      //console.log(data);
	    $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});