var http = require("http");
var fs = require("fs");

let port = 8080;

let requestHandler = (request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });
  if (request.url == "/contacts") {
    response.statusCode = 404;
    response.write("404");
  } else {
    response.write(`Server started at port ${port}!`);
  }
  fs.appendFile("logs.txt", request.url, function (error) {
    if (error) throw error;
  });
  response.end();
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    return console.log("Error:", err);
  }
  console.log(`Server started at port ${port}`);
});
