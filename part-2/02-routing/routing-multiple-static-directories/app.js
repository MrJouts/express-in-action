const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "public");
const userUploadsPath = path.resolve(__dirname, "user_uploads");

// app.use(express.static(publicPath));
// app.use(express.static(userUploadsPath));

app.use("/public", express.static(publicPath));
app.use("/uploads", express.static(userUploadsPath));

app.get("/users/:userid/profile_photo", (req, res) => {
  res.sendFile(getProfilePhotoPath(req.params.userid));
});
