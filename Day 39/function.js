// functions

function myName () {
    console.log("S");
    console.log("a");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("b");
    console.log("h");
}

// refrence to function
myName

// excuion of function
myName()


function loggedInUser (username){
    console.log(username, "is logged in");
}
// loggedInUser("Saurabh")

// return method 1
function loggedInUser1(username){
    let message = `${username} is logged in`
    return message
}
// console.log(loggedInUser1("Saurabh"));

// return method 2
function loggedInUser2(username){
    return `${username} is logged in`
}

// console.log(loggedInUser2("Saurabh"));

function user2(name){
    // check using if 
    if(name === undefined){
        console.log("please enter your name");
        return
    }
    let message = `${name} is logged in`
    return message
}
// console.log(user2());

// same as last one
function user(name){
    // check using if 
    if(!name){
        console.log("please enter your name");
        return
    }
    let message = `${name} is logged in`
    return message
}

// when no argument pass
// console.log(user()); //undefined is logged in

// when no argument pass
// console.log(user("")); // empty string ==>  is logged in

// for by default value 
// function user1(name = "Sam"){
//     let message = `${name} is logged in`
//     return message
// }
// console.log(user1());


function sum(num1, num2){
    return num1 + num2

}
console.log(sum(5, 7));