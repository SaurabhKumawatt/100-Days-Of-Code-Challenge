class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username : ${this.username}`);
    }
    // static block of this for user
    static createId(){
        return `123`
    }
}

const chai = new User("chai")
chai.logMe()
console.log(chai.createId());
