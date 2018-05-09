const url = 'https://jsonplaceholder.typicode.com/posts/'
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))

//copy and paste above code to dev tools to test
//fetch - everything gets routed to ".then" including error, e.g. 404, 500, etc. except for network error, site is not available or invalid domain.
//note: axios or jquery is better than fetch
