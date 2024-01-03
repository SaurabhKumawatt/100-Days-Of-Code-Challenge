console.log("Day 45 - 100 Days Of Code Challenge");

//high orde,r array loops

// for of loop in array
const arr = [1, 2, 3, 4]
for (const i of arr) {
    //console.log(i);
}

// for of loop in string
const greet = "Hello World!"
for (const message of greet) {
    if (message == " "){
        continue
    }
    //console.log(message);
}

// for of loop in map

const countryCode = new Map()
countryCode.set("IN", "India")
countryCode.set("Fr", "France")
countryCode.set("USA", "America")

for (const [code, value] of countryCode) {
    //console.log(code, ":-", value);
}


// for of loop not able to iterate object

// for in loop ==> this gives a keys

// for in loop in array 

const coding = ["JS", "RB", "CPP"]
for (const key in coding) {
    // for values ==> coding[key]
    // console.log(key);
}

// for in loop on object
const myObject = {
    JS : "JavaScript",
    CPP : "C++",
    Rb : "Ruby"
}
for (const key in myObject) {
    // for value printing ==> myObject[key]
    //console.log(`${myObject[key]} shortcut is ${key}`);
}

// for loop not able to iterate map

// for each loop 
const programming =["JS", "Python", "CPP"]
programming.forEach( function (element) {
    // console.log(element);
})

programming.forEach((name) => {
    // console.log(`output using arrow fn => ${name}`);

})

function printMe(name) {
    console.log(name);
}
// programming.forEach(printMe)

programming.forEach( (item, index, arra) => {
    //console.log(item, index, arra);
} )

// many object in array
const user =[
    {
        userName : "Lalit",
        course : "front-end Web Development"
    },
    {
        userName : "Saurabh",
        course : "full stack Web Development"
    },
    {
        userName : "Aman",
        course : "full stack Web Development"
    }
]
// console.log(user);

user.forEach( (details) => {
    console.log(`${details.userName} is a ${details.course}`);
    
})