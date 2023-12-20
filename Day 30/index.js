console.log("Day 30 - 100 Days Of Code Challenge");

let age = 19;

let grace = 2;


console.log("age is ", age + grace);
if (age > 18){
    console.log("You Can Drive")
}
else{
    console.log("You Can Not Drive");
}

let x = 10;
let y = 15;

// equal to condition
if(x==y){
    console.log("x is equal to y");
}
else{
    console.log("x is not equal to y");
}
// not equal condition
if(x!=y){
    console.log("x is not equal to y");
}
else{
    console.log("x is equal to y");
}

// equal to or type condition
if(x===y){
    console.log("x is equal to or type is also equal to y");
}
else{
    console.log("x is not equal to or type is also not equal to y");
}

// not equal to not type condition
if(x!==y){
    console.log("x is not equal to or type is also not equal to y");
}
else{
    console.log("x is equal to or type is also equal to y");
}


// grater than condition
if(x>y){
    console.log("x is grater than y");
}
else{
    console.log("x is less than y");
}
// less than condition
if(x<y){
    console.log("x is less than y");
}
else{
    console.log("x is grater than y");
}

// grater than or equal to condition
if(x>=y){
    console.log("x is grater than or equal to y");
}
else{
    console.log("x is not grater than or not equal to y");
}
// less than or equal to condition
if(x<=y){
    console.log("x is less than or equal to y");
}
else{
    console.log("x is not less than or not equal to y");
}

// if else ladder

let a = 10;
let b = 10;

if (a>b){
    console.log("a is grater than b");
}
else if(a<b){
    console.log("a is less than b");
}
else {
    console.log("a is equal to b");
}

// ternary operators

c = 11;
d = 15;
e = c>d ?(c-d):(d-c)
console.log(e);