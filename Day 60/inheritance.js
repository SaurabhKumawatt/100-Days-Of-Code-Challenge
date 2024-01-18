class student{
    constructor(username, email){
        this.username = username
        this.email = email
    }
    logMe(){
        console.log(`${this.username} is logged in`); 
    }
}
class level extends student{
    constructor(username, level){
        super(username)
        this.level = level

    }
    levelOfStd(){
        console.log(`Your level is ${this.level}`);
    }
}

const saurabh = new student("Saurabh", "saurabh@gmail.com")
const chai = new level("chai", 5)
chai.logMe()
chai.levelOfStd()

