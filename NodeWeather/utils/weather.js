const request = require("request");
const geocode = require("./geocode")

const weather = (lat, long, callback)=> {

    const url =
  `http://api.weatherstack.com/current?access_key=3559dc3fae7180a9a60b11ae73eeea0f&query=${long},${lat}&units=m`;

  request({url:url, json:true}, (err,res)=> {
    if (err) {
        callback("Unable to connect to weather service", undefined)

      } else if (res.body.error) {
          callback("Unable to find location", undefined)
        
      } else {
          let temp = res.body.current.temperature
          let rainPercentage = res.body.current.precip

          callback(undefined,
            `It is currently ${temp} degrees out. There is a ${rainPercentage}% chance of rain`
          )
      }
  })
}
console.log(
    
  );

module.exports = weather

