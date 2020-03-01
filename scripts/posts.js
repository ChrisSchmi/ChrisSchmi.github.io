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
      allPosts: [],
      posts: [],
      searchphrase: ''
    },
    methods: 
    {
      filteredList() {
        var self = this;
          

          if(self.searchphrase == '')
          {
            console.log('searchphrase empty');
            self.posts = self.allPosts;
            return;
          }

          console.log('searching for: ' + self.searchphrase);

          var filtered = [];

          self.allPosts.entries.forEach(entry =>
          {
            entry.Content.forEach( c =>
            {
              if(typeof c.Tags !== 'undefined')
              {
                c.Tags.forEach( t =>
                {
                  if(t.toLowerCase() == self.searchphrase.toLowerCase())
                  {
                    filtered.push(entry);
                  }
                })
              }
            })
          });

          console.log(filtered.length);

          self.posts = new Object();

          self.posts.entries = filtered;

      }
    },
    mounted: function()
    {
      var self = this;
      self.loading = true;
      var link = 'https://chrisschmi.github.io/scripts/posts.json';

      axios.get(link)
      .then(response => {
        self.allPosts = response.data;
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


  