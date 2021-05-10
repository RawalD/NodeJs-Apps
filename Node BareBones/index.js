//Dependencies
const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

// Server responds with a string
const server = http.createServer((req, res) => {
  //Get URL and parse
  const parsedURL = url.parse(req.url, true);

  //Get path
  const path = parsedURL.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");

  //Get query string as object
  const queryStringObj = parsedURL.query;

  //Get HTTP method
  const method = req.method.toLowerCase();

  //Get headers as object
  const headers = req.headers;

  //Get payload
  const decoder = new StringDecoder('utf-8')

  //Send response
  res.end("Hello World");

  //Log path
});

//Start server
server.listen(3000, () => {
  console.log("Server Active");
});
