// Day 60 - 100 Days Of Code Challenge
// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}123`;
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const saurabh = new User("Saurabh", "saurabh@gmail.com", "@546")
// console.log(saurabh.changeUsername());
// console.log(saurabh.encryptPassword());

// behind the scene 
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}123`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const chai = new User("chai", "chai@gmail.com", "chai@")
console.log(chai.changeUsername());
console.log(chai.encryptPassword());

