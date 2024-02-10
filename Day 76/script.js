// var a = 15;

// module.exports = a;

// var oneLinerJoke = require('one-liner-joke');

// console.log(oneLinerJoke.getRandomJoke())

var figlet = require("figlet");

figlet("Day 76", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});