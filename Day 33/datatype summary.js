// two types of data in JS

// 1. primitive data 
// -- 7 types of primitive data types 

// 1. Number 
const a = 10
console.log(a);
console.log(typeof a);

// 2. String
const b = "Hello World!"
console.log(b);
console.log(typeof b);

// 3. Boolean
const c = true
console.log(c);
console.log(typeof c);

// 4. BigInt
const d = 10n
console.log(d);
console.log(typeof d);

// 5. Null
const e = null
console.log(e);
console.log(typeof e);

// 6. undefined 
const f = undefined
console.log(f);
console.log(typeof f);

// 7. Symbol
const g = Symbol('12')
const h = Symbol('12')
console.log(g);
console.log(typeof g);
console.log(g === h);

// 2. Non Primitive Data
// -- 3 types of primitive data types 

// 1. Array
const heros = ["HanumanJI", "RamJI", "Krishna"]
console.log(heros);
console.log(typeof heros);

//2. Object 
const obj = {
    name : "Saurabh",
    email : "saurabh@gmail.com"
}
console.log(obj);
console.log(typeof obj);

//3. function
const fun1 = function (){
    console.log("Hello world!");
}
   
console.log(fun1);

