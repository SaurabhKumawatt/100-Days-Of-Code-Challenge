console.log("Day 38 - 100 Days Of Code Challenge");

// objects in JS

const mySym = Symbol("Value 1")

const jsUser = {
    // key : "Value",
    name : "Saurabh",
    [mySym] : "Value 2",
    age : 18,
    location : "Indore",
    email : "saurabh@github.com",
    isLoggedIn : true,
    lastLoginDAys : ["Monday", "Sunday"],
    "Full Name" : "Saurabh Kumawat"
}
// console.log(jsUser);
// console.log(typeof jsUser);

// aceess one key ==> two ways to access
// console.log(jsUser.name);
// console.log(jsUser["name"]);

// overwrite a value
// jsUser.email = "saurabh@google.com"
// console.log(jsUser["email"]);

// lock object
// Object.freeze(jsUser)
// jsUser.email = "saurabh@insta.com"
// console.log(jsUser["email"]);


// access symbol
// console.log(jsUser[mySym]);

// function in object
jsUser.greeting = function(greeting){
    console.log("Hello JS User");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo = function(greeting){
    console.log(`Hello JS User, ${this["Full Name"]}`);
}
console.log(jsUser.greetingTwo);
console.log(jsUser.greetingTwo());

