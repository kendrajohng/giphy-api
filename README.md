# giphy-api
Using free GIPHY API

LinkedIn Learning | "Introduction to Web APIs" | Section 4 | Working with the Giphy API

1) create GIPHY account
2) create new app
3) view API documentation -> endpoints -> random endpoint
4) in js file create variable called request = new XMLHttpRequest as the request object
5) open connection to giphy API using request.open (this method will take 2 arguments)
6) first argument will be type of request 'GET'
7) second argument will be URL used to connect to the giphy API
8) add API key - allows the API owner some control over who uses their API
request.open('GET','https://URL?api_key=key');
9) create function to do something with the data once we get it, use onload event trigger
request.onload = function() {
10) create new repsponse variable that'll be equal to request
var response = request.response;
11) response comes a a string so need to parse, convert to object
var parsedData = JSON.parse(response);
12) print to console
console.log(parsedData);
13) send API GET request
request.send();
}
14) filter type of GIFs by squirrel and rating
&tag=squirrels&rating=g
15) access specific parts of reponse and get URL for displaying data in HTML using dot notation
var originalUrl = parsedData.data.images.original.url;
16) print to console
console.log(originalUrl);
17) create new HTML element
var gif = document.createElement('img');
18) use data from API response
gif.setAttribute('src',originalUrl);
19) add it to the page
document.body.appendChild(gif);

