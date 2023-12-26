console.log("Day 35 - 100 Days Of Code Challenge");

// Number And Math In JavaScript

// Number

const score = new Number(456);
console.log(score);

// Number to string
console.log(score.toString());

// fixed for add decimal in number
console.log(score.toFixed(2));

// Precise a decimal number
const newScore = new Number(456.756)
console.log(newScore.toPrecision(4));

// Local String
const balance = new Number(100000)
console.log(balance.toLocaleString('en-IN')); // 'en-In' - indian standard

// ++++++++++++++++++++++++++++++++++++++++++++++++    Math  +++++++++++++++++++++++++++++++++++++

// Math is a by default library in JS

// abs return positive value
console.log(Math.abs(-45));

// round => round of a decimal number 
console.log(Math.round(4.6)); // 4.3 => 4,  4.6 => 5

// ceiling => round of all the decimal in top value 4.2 => 5
console.log(Math.ceil(4.2));

// floor => round of all the decimal in low value 4.6 => 4
console.log(Math.floor(4.6));

// sqrt => squre root of value
console.log(Math.sqrt(2));


// pow => power of number (x, y) = x^(y) / x**y
console.log(Math.pow(2, 2));


// minimum value in array
console.log(Math.min(3, 1, 5, 7));

// maximum value in array
console.log(Math.max(3, 1, 5, 7));


// random value by default => between 0 to 1
console.log(Math.random());

// we get value between 1 to 10
console.log((Math.random() * 10) + 1); // +1 for avoiding 0 value from random
console.log((Math.floor(Math.random() * 10) + 1));

const min = 20
const max = 40
//  we get value between 20 or 40
console.log(Math.floor(Math.random() * (max - min + 1) + min));

const newMin = 50
const newMax = 100

console.log(Math.round(Math.random() * (newMax - newMin + 1) + newMin));


