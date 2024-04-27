const express = require("express");

const app = express();

app.get("/olivia", (req, res) => {
  res.send("Welcome to Olivia's homepage!");
});

// app.get("/users/:userid", (req, res) => {
//   const userId = parseInt(req.params.userid, 10);
//   console.log("User id: " + userId);
//   res.end();
// });

// app.get(/^\/users\/(\d+)$/, function (req, res) {
//   var userId = parseInt(req.params[0], 10);
//   console.log("User id: " + userId);
//   res.end();
// });

app.get(/^\/users\/(\d+)-(\d+)$/, function (req, res) {
  var startId = parseInt(req.params[0], 10);
  var endId = parseInt(req.params[1], 10);
  console.log("startId: " + startId);
  console.log("endId: " + endId);
  res.end();
});

app.get("/search", (req, res) => {
  console.log(req.query.q)
  // req.query.q == "javascript-themed burrito";
  res.end()
});

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(3000);
