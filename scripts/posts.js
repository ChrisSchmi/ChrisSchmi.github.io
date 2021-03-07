// https://coderwall.com/p/nilaba/simple-pure-javascript-array-unique-method-with-5-lines-of-code
Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}

const app = new Vue({
    el: '#app',
    data: {
      search: '',
      loading: false,
      allPosts: [],
      posts: [],
      searchphrase: '',
      hasSearchResults: true
    },
    methods: 
    {
      filteredList: function() {
        var self = this;

          if(self.searchphrase == '')
          {
            console.log('searchphrase empty');
            self.posts = self.allPosts;
            self.hasSearchResults = true;
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

          self.hasSearchResults = filtered.length > 0;

          self.posts = new Object();
          self.posts.entries = filtered.unique();

      },
      setsearch: function (phrase)
      {
        var self = this;
        self.search = phrase;
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


  