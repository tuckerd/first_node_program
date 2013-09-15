var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;  //now can be used like a module

// Line 1 requires the http module that ships with Node.js and makes it accessible through the variable http.

// We then call one of the functions the http module offers: createServer. This function returns an object, and this object has a method named listen, and takes a numeric value which indicates the port number our HTTP server is going to listen on.

// We could have written the code that starts our server and makes it listen at port 8888 like this:
