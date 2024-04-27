const express = require("express");

const app = express();

app.get("/olivia", (req, res) => {
  res.send("Welcome to Olivia's homepage!");
});

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(3000);
