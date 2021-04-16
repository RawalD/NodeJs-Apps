const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("Requested " + new Date());
  // res.send('Welcome To Middlewarer')

  next();
});

app.use((req, res, next) => {
  let filePath = path.join(__dirname, "static", req.url);
  fs.stat(filePath, (err, fileInfo) => {
    if (err) {
      next();
      return;
    }

    if (fileInfo.isFile()) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });
});

app.use((req,res)=>{
    res.status(404)
    res.send('File Not Found')
})

app.listen(port, () => {
  console.log(`Active on port ${port}`);
});
