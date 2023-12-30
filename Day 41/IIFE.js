// Immediately Invoked Function Expressions -- IIFE

function chai (name){
    console.log(`Hello, Chai lover ${name}`);
}
chai("Saurabh");

// IIFE ==>
(function chai (name){
    console.log(`Hello, Chai lover ${name}`);
})("Kundan");
// for ending IIFE ==> ;

((username) => {
    console.log(`Hello ${username}, Welcome To the website`);
})("Saurabh");

