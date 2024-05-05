const path = require("path");
const express = require("express");
const zipdb = require("zippity-do-dah");
const { OpenWeatherAPI } = require("openweather-api-node");

const app = express();
let weather = new OpenWeatherAPI({
  key: process.env.WEATHER_API_KEY
});

app.use(express.static(path.relative(__dirname, "public")));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get(/^\/(\d{5})$/, (req, res, next) => {
  const zipcode = req.params[0];
  const location = zipdb.zipcode(zipcode);
  if (!location.zipcode) {
    next();
    return;
  }

  const latitude = parseFloat(location.latitude, 10);
  const longitude = parseFloat(location.longitude, 10);

  weather.setLocationByCoordinates(latitude, longitude, (err, data) => {
    if (err) {
      next();
      return;
    }
  });

  weather.getCurrent().then((data) => {
    res.json({
      zipcode: zipcode,
      temperature: data.weather.temp.cur
    });
  });
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000);
