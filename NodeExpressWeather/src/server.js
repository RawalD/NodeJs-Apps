const express = require("express")
const path = require("path")

const app = express()
const pathLoc = path.join(__dirname, "../public")

app.set("view engine", "hbs")
app.use(express.static(pathLoc))

app.get("", (req,res)=>{
    res.render("index")
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