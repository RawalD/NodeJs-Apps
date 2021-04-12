const geocode = require("./utils/geocode");
const weather = require("./utils/weather");

const userCity = process.argv[2]

geocode(userCity, (err, {lat,long,name}={}) => {
  if (err) {
    return console.log(error);
  }

  weather(long, lat, (err, weatherdata) => {
    if (err) {
      return console.log(err);
    }

    console.log(name);
    console.log(weatherdata);
  });
});

