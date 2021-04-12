const request = require("request");
const geocode = require("./geocode")

const weather = (lat, long, callback)=> {

    const url =
  `http://api.weatherstack.com/current?access_key=3559dc3fae7180a9a60b11ae73eeea0f&query=${long},${lat}&units=m`;

  request({url, json:true}, (err,{body})=> {
    if (err) {
        callback("Unable to connect to weather service", undefined)

      } else if (body.error) {
          callback("Unable to find location", undefined)
        
      } else {
          let temp = body.current.temperature
          let rainPercentage = body.current.precip

          callback(undefined,
            `It is currently ${temp} degrees out. There is a ${rainPercentage}% chance of rain`
          )
      }
  })
}

module.exports = weather

