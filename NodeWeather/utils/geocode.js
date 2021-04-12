const request = require("request")

const geocode = (address, callback) => {
    const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicmF3YWxkIiwiYSI6ImNrbmVkdjZ2czB2b3MycW9hOXg5b250MHYifQ.iNX98tBV3aAq18WtuD8dyA&limit=1`;

    request({url: geoUrl, json:true}, (err,res)=>{
        if(err){
            callback("Unable to connect to Map Box service", undefined)
        }
        else if(res.body.features.length === 0){
            callback("Unable to find location", undefined)
        }
        else{
            callback(undefined, {
                lat: res.body.features[0].center[1],
                long: res.body.features[0].center[0],
                name: res.body.features[0].place_name
            })
        }
        
    })
}



module.exports =geocode