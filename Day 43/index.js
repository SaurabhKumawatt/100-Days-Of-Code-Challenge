console.log("Day 43 - 100 Days Of Code Challenge");

//control flow

const userLoggedIn = true
const debitCard = true
const mobNumberVerify = false
// logical operators 

// and operator => &&
// all conditions are true yaa false
if (userLoggedIn && debitCard && mobNumberVerify){
    console.log("Allow to buy course");
}

// or operator => ||
// any one true
const userLoggedFromGoogle = false
const userLoggedFromEmail = false
const userLoggedFromNumber = true

if (userLoggedFromGoogle || userLoggedFromEmail || userLoggedFromNumber){
    console.log("You are logged in system");
}

const month = 6
// switch case statement 
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("mai");
        break;
    case 6:
        console.log("june");
        break;

    default:
        console.log("wrong value");
        break;
}

// falsy values => false, 0, -0, bigInt 0n, null, undefined, NaN, empty string => ""
// const userEmail = ""
const userEmail = 0
if (userEmail){
    console.log("got email");
} else {
    console.log("don't have a email");
}

// truthy values ==> true, "false", "0", " ", {}, [], function(){}
// const userLogged = {key : 1}
const userLogged = {}
if (userLogged){
    console.log("logged in");
} else {
    console.log("logged out");
}

// check object empty or not
if (Object.keys(userLogged).length===0){
    console.log("object is empty");
} else {
    console.log("object is not empty");
}

// const myArr = []
const myArr = [1, 2, 3]
//check array is empty or not
if (myArr.length===0){
    console.log("array is empty");
} else {
    console.log("array is not empty");
}

//nullish coalscing operator (??)
let value1;
// value1 = 7 ?? 5
// value1 = null ?? 7
// value1 = null ?? 10 ?? 100
value1 = undefined ?? 100 ?? 10
console.log(value1);