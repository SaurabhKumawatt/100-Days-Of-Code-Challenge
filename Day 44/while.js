// while loop

// table of 2 using while loop
let i = 1
while (i <= 10) {
    console.log(i * 2);
    i++
}

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

let myArray = ["Jai", "Shree", "Ram"]
let arr = 0
while (arr < myArray.length) {
    console.log(myArray[arr]);
    arr = arr + 1
}

// dp while loop

// table of 2
let table = 1
do {
    console.log(table * 2);
    table++
} while (table <= 10);


// do while => one time run after check value
let a = 11
do {
    console.log(a);
    a++
} while (a <= 10);

console.log("table of 3");
let b = 1
do {
    console.log(b * 3);
    b++
} while (b <= 10);