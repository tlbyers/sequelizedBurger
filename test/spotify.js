/* Load the HTTP library */
var http = require("http");
var SpotifyWebApi = require("../");

/* Create an HTTP server to handle responses */
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

var spotifyApi = new SpotifyWebApi({
  clientId : '85ca4ee1c99b40be8e15bbe784c29882',
  clientSecret : 'e918b675c5204f90bee176a918f481a9',
});


// Retrieve an access token
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err.message);
  });