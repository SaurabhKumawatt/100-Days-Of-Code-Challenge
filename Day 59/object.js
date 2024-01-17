// Day 59 - 100 Days Of Code Challenge


function multiplyBy2 (num){
    return num*2
}

multiplyBy2.power = 3

console.log(multiplyBy2(5))
console.log(multiplyBy2.power);
console.log(multiplyBy2.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = ()=>{
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("Chai", 10)
const tea = createUser("tea", 25)

chai.printMe()