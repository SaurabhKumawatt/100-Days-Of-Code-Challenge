console.log("Day 40 - 100 Days Of Code Challenge");

// rest operator

function calculateCartPrice(...price){
    return price
}
// all values store in array
console.log(calculateCartPrice(100, 300, 500));

function cartItemCounter(...item){
    return item
}
// without rest operator only store 1st value
console.log(cartItemCounter(1, 1, 2, 3));


//object pass in function

const user = {
    id : 1,
    name : "Saurabh",
    package : "gold"
}

function userGreeting(greetingMsg){
    console.log(`Hello ${greetingMsg.name}, Welcome To Platform, Your package is ${greetingMsg.package}`);
}

// userGreeting(user)

userGreeting({
    name : "Lalit",
    package: "Gold"
})


const userActivation ={
    id : 10,
    name : "Devendra",
    level : 1
}

function newUserGreet(newUser){
    console.log(`Hello ${newUser.name}, Your id is activated, Your level is ${newUser.level} & id is ${newUser.id}`);
}

newUserGreet(userActivation)

// array pass in function

const myArr = [100, 300, 500]

function returnSecValue(myArray){
    return myArray[1]
}

console.log(returnSecValue(myArr));
console.log(returnSecValue([100, 300, 500]));