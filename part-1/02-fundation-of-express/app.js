const express = require("express");
const http = require("http");
var app = express();

app.use((request, response, next) => {
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});

app.use((request, response, next) => {
  const minute = new Date().getMinutes();
  if (minute % 2 === 0) {
    next();
  } else {
    response.statusCode = 403;
    response.end("Not authorized.");
  }
});

app.use((request, response) => {
  response.end('Secret info: the password is "swordfish"!');
});

http.createServer(app).listen(3000);
