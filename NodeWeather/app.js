const geocode = require("./utils/geocode")
const weather = require("./utils/weather")


geocode("johannesburg", (err,data) => {
    console.log("Error", err)
    console.log("Data",data)

    weather(-75.7088,44.1545, (err,data)=>{
        console.log("Error",err)
        console.log("Data", data)
    })
})