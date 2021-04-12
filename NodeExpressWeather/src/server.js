const express = require("express")
const path = require("path")
const hbs = require("hbs")

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
    res.send({
        forecast: "27 degs",
        location: "location"
    })
})

app.listen(3000, () => {
    console.log("Server started")
})