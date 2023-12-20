console.log("Day 31 - 100 Days Of Code Challenge")

// loops in JavaScript 

// for loop
let a = 1;
for (let i = 2; i < 20; i++) {
    console.log(a + i);
}


// for in loop
const obj = {
    "Name": "Saurabh",
    "Role": "Programmer",
    "Company": "CodeWithChaay",
}
for (const key in obj) {
    const element = obj[key]
    console.log(key, element)
}
for (const key in obj) {
    const element = obj[key]
    console.log(element)
}

// for of loop
for (const nm of "Saurabh") {
    console.log(nm)
}

// while loop 
let i = 1;
while (i < 21) {
    console.log(i);
    i++;
}

// do while loop
let e = 1;
do {
    console.log(e)
    e++;
} while (e < 21);

let marks = {
    Aman: "92",
    Lalit: "82",
    Saurabh: "72",

}

for (let key in marks) {
    const element = marks[key]
    console.log(key, element)
}

// functions in JavaScript
function sum(a, b) {
    console.log(a + b)

}

sum(10, 2)
sum(12, 12)

function sub(num1, num2){
    return num1 - num2
}
result1 = sub(24, 12)
console.log("Substraction of num1 or num2 = " + result1)

//arrow function 

const nice = (name) => {
    console.log("Hey " + name + " you are amazing")
    console.log("Hey " + name + " you are intrasting")
}
nice("Javascript")