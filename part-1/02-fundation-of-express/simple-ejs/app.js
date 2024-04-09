const http = require("http");
const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("index", {
    message: "Hey everyone! This is my webpage.",
  });
});

http.createServer(app).listen(3000);
