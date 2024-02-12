const express = require("express");
const app = express();
// configure ejs 
app.set("view engine", "ejs");

// configure static files for frontend
app.use(express.static("./public"));

app.get("/", function(req, res){
    // res.send("hello world!")
    res.render("index", {"name": "saurabh"})
})
app.get("/contact", function(req, res){
    // res.send("hello world!")
    res.render("contact")
})
app.get("/error", function(req, res){
    // res.send("hello world!")
    res.render("error")
})

// dynamic routing
app.get("/profile/:username", function(req, res){
    res.send(`hello from ${req.params.username}`)
})
app.get("/books/:name", function(req, res){
    res.send(`Book Author is ${req.params.name}`)
})

// error handler 
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3000)