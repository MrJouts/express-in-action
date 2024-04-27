const express = require("express");

const ALLOWED_IPS = ["127.0.0.1", "123.456.7.89"];

const api = express.Router();

api.use((req, res, next) => {
  const userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
  if (!userIsAllowed) {
    res.status(401).send("Not authorized!");
  } else {
    next();
  }
});

api.get("/users", (req, res) => {
  res.end();
});

api.get("/user", (req, res) => {
  res.end();
});

api.get("/messages", (req, res) => {
  res.end();
});

api.get("/message", (req, res) => {
  res.end();
});

module.exports = api;
