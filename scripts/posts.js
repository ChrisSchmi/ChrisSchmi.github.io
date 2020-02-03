// var app = angular.module("miniblog", []);
// app.controller("PostsController", function($scope, $http) {
//   $http.get('https://chrisschmi.github.io/scripts/posts.json').
//     success(function(data, status, headers, config) {
//       //console.log(data);
// 	    $scope.posts = data;
//     }).
//     error(function(data, status, headers, config) {
//       // log error
//     });
// });

const app = new Vue({
    el: '#app',
    data: {
      search: '',
      loading: false,
      posts: []
    },
    computed: { },
    methods: { },
    mounted: function()
    {
      var self = this;
      self.loading = true;
      var link = 'https://chrisschmi.github.io/scripts/posts.json';

      axios.get(link)
      .then(response => {
        self.posts = response.data;
        self.loading = false;
      })
      .catch(error => 
        {
          console.log(error);
          self.loading = false;
        }
      )
    }
  });
