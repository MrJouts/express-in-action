const express = require("express");
const path = require("path");

const app = express();

const filePath = path.join(__dirname, "celine.jpg");
app.use((req, res, next) => {
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("File failed to send.");
      next(new Error("Error sending file!"));
    } else {
      console.log("File sent!");
    }
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500);
  res.send("Internal server error.");
});

app.listen(3000, (req, res) => {
  console.log("App listening in port 3000...");
});
