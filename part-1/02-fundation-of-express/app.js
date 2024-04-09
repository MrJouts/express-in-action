const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

const EVIL_IP = "123.45.67.89";

app.use((request, response, next) => {
  if (request.ip === EVIL_IP) {
    response.status(401).send("Not allowed!");
  } else {
    next();
  }
});

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", (request, response) => {
  response.end("Welcome to my homepage!");
});

app.get("/about", (request, response) => {
  response.end("Welcome to the about page!");
});

app.get("/weather", (request, response) => {
  response.end("The current weather is NICE.");
});

app.get("/hello/:who", (request, response) => {
  response.end("Hello, " + request.params.who + ".");
  // Fun fact: this has some security issues, which we’ll get to!
});

app.use((request, response) => {
  response.statusCode = 404;
  response.end("404!");
});

http.createServer(app).listen(3000);
