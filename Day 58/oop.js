// Day 58 - 100 Days Of Code Challenge 

// OOP - Object Oriented Programming

// Object literal
const user = {
    username : "Saurabh",
    loginCount : 12,
    isLoggedIn : true,

    getUserDetails : function(){
        // console.log("the user details in connected with database");
        console.log(this);
    }
}
// console.log(this);
// console.log(user);
// console.log(user.getUserDetails());


function User(username, password){
    this.username = username
    this.password = password

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("Saurabh", "123")
const userTwo = new User("Chai", "135623")

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);


