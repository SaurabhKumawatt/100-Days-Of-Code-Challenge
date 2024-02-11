const express = require("express");
const app = express();

app.use(function(req, res, next){
    console.log("hello from middleware");
    next();
})
app.use(function(req, res, next){
    console.log("hello from middleware 2");
    next();
})
app.get("/", function(req, res){
    res.send("Hello, World!")
})
app.get("/about", function(req, res){
    res.send("hello users from about")
})

app.get("/profile", function(req, res){
    res.send("hello users from profile")
})

app.listen(3000)