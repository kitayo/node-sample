var express = require("express");

var app = express();

app.get("/hello", function(req, res){
  res.send("Hello!");
});

app.all("*", function(req, res){
    res.sendStatus(404);
});

app.listen(3000, function(){
    console.log("Running on port 3000");
});