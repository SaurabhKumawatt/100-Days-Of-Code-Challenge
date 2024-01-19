// Day 61 - 100 Days Of Code Challenge

// getter and setter

class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        // return `${this._password}abc`
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const chai = new User("chai@gmail.com", "chai")
console.log(chai.password);
console.log(chai.email);
