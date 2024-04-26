const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use((req, res, next) => {
  console.log('Request IP: ' + req.url);
  console.log('Request date: ' + new Date());
  next();
});

app.use((req, res, next) => {
  var filePath = path.join(__dirname, 'static', req.url);
  fs.stat(filePath, (err, fileInfo) => {
    if (err) {
      next();
      return;
    }

    if (fileInfo.isFile()) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });
});

app.listen(3000, () => {
  console.log('App starte on port 3000');
});
