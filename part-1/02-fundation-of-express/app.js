const express = require("express");
const logger = require("morgan");
const http = require("http");

const app = express();

app.use(logger("short"));

app.use((request, response) => {
  response.end("Hello, world!");
});

http.createServer(app).listen(3000);
