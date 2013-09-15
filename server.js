var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

// Line 1 requires the http module that ships with Node.js and makes it accessible through the variable http.

// We then call one of the functions the http module offers: createServer. This function returns an object, and this object has a method named listen, and takes a numeric value which indicates the port number our HTTP server is going to listen on.

// We could have written the code that starts our server and makes it listen at port 8888 like this:


