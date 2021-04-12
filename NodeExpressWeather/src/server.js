const express = require("express")
const path = require("path")
const hbs = require("hbs")

const geocode = require("./utils/geocode")
const weather = require("./utils/weather")

const app = express()

//Express comfi
const pathLoc = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

//HBS configs
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(pathLoc))

app.get("", (req,res)=>{
    res.render("index", {title: "Weather", name:"Dip Rawal"})
})

app.get("/about", (req,res)=>{
    res.render("about", {title: "About Me"})
})


app.get("/help", (req,res)=>{
    res.render("help", {title: "Help Page", name: "Dip Rawal"})
})

app.get("/weather", (req,res)=>{

    if (!req.query.address) {
        return  res.send({error: "No address supplied"})
    }

    geocode(req.query.address, (err, {lat,long,name}={}) => {
        if (err) {
          return res.send({err});
        }
      
        weather(long, lat, (err, weatherdata) => {
          if (err) {
            return res.send({err});
          }
      
          res.send({
            address: req.query.address,
            forecast: weatherdata,
            location: name
        })
      
        });
      });
      

   
})


app.get("*", (req,res)=>{
    res.render("404")
})

app.listen(3000, () => {
    console.log("Server started")
})