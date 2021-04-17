const fetch = require('node-fetch');
const fs = require("fs")

const url = "www.omdbapi.com/?i=tt3896198&apikey=2ef7d123"
///?i=tt3896198&apikey=2ef7d123"

  
let settings = { method: "Get" };
  
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
          // do something with JSON
          fs.writeFileSync("movie.txt",json.Title)
      });