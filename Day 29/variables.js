// variables in js

// var is gloable scope variable
var a = 10;
a = a + 2;
var b = 22;

console.log(a)
console.log(b)


// let is block scope variable
let x = 22;
{
    let x = 55;
    console.log(x)
}
console.log(x)

// const is a constant variable - this variable value not change
const y = 88;
// y = y + 2
// variables.js:22 Uncaught TypeError: Assignment to constant variable.
console.log(y)

// data types in JS
let c = null;
let d = undefined;
let e = 10;
let f = "Chaay";
let g = true;
let h = 3.555;

console.log(c, d, e, f, g, h)
console.log(typeof c, typeof d, typeof e, typeof f, typeof g, typeof h)

// object in JS

let o = {
    Name : "Saurabh Kumawat",
    Branch : "B.tech CSE",
    is_tea_lover : true,
}

console.log(o)

o.location = "Indore";

console.log(o)