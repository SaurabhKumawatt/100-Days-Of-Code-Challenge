console.log("Day 37 - 100 Days Of Code Challenge");

// arrays in JavaScript

const myArr = [1, 2, 3, 4, 5, 6]
console.log(myArr);
console.log(typeof myArr);

const myNewArr = new Array(6, 7, 8, 9)
console.log(myNewArr);
console.log(typeof myNewArr);

// arrays methods

//1. push ==> insert element in the last of array
// myArr.push(7)
// console.log(myArr);

//2. pop ==> remove element in the last of array
// myArr.pop()
// console.log(myArr);

//3. unshift ==> insert element in start of array
// myArr.unshift(0)
// console.log(myArr);

//4. unshift ==> remove element of start of array
// myArr.shift()
// console.log(myArr);

//5. includes ==> check element exist or not == output in boolean 
// console.log(myArr.includes(2));
// console.log(myArr.includes(0));

//6. indexof ==> check index of element
// console.log(myArr.indexOf(2));
// console.log(myArr.indexOf(12)); // if not availabe output is -1

//7. join ==> convert arrays into string
// const myN1 = myArr.join()
// console.log(myN1);
// console.log(typeof myN1);

//8. slice and splice

// const a1 = myArr.slice(1, 4)
// console.log(a1);
// console.log(myArr);


// splice remove element from array
// const a2 = myArr.splice(1, 4)
// console.log(myArr);
// console.log(a2);

const score1 = [100, 200, 300]
const score2 = [400, 500, 600]
const score3 = [700, 800, 900]

// push array in array
// score1.push(score2)
// console.log(score1);

// concat ==> merge 2 arrays
// const score = score1.concat(score2)
// console.log(score);

// const newScore = [...score1, ...score2, ...score3]
// console.log(newScore);

// flat ==> merge arrays in arrays
const num = [1, 2, 3, [4, 5, 6], 7, [8, 9], 0]
console.log(num);
console.log(num.flat());

// check array or not
console.log(Array.isArray("Saurabh"));
console.log(Array.isArray(num));

// convert into array
console.log(Array.from("Saurabh"));


// Array.of ==> convert many var into array
let mark1 = 56
let mark2 = 70
let mark3 = 55

console.log(Array.of(mark1, mark2, mark3));


