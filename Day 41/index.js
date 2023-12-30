console.log("Day 41 - 100 Days Of COde Challenge");

// this keyword in function
const user = {
    username : "Saurabh",
    price : "999",
    welcomeMessage: function(){
        // without this we get error
        console.log(`${this.username}, Welcome to website`);
    }
}

user.welcomeMessage()

// const user1 = function(){
//     let name = "Saurabh"
//     // console.log(name);
//     console.log(this)
// }
// console.log(user1())



// const newUser =()=>{
//     let name = "Saurabh"
//     // console.log(name);
//     console.log(this);
// }

// console.log(newUser())


// arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 9));

// in this not use return keyword but give return
const newAddTwo = (num1, num2) => num1 + num2
console.log(newAddTwo(10, 2));

// in this not use return keyword but give return
const sumTwo = (num1, num2) => (num1 + num2)
console.log(sumTwo(5, 6));

// object return
const newUser = () => ({username : "Saurabh", price : "999"})
console.log(newUser());


