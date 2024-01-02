console.log("Day 44 - 100 Days Of Code Challenge")

// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);

}

//nested loop
for (let i = 1; i <= 10; i++) {
    console.log(`outer value is == ${i}`);

    for (let j = 1; j <= 10; j++) {
        console.log(`inner value is ${j}`);
    }

}
// 2 ka table
for (let i = 1; i <= 10; i++) {
    console.log(i*2);
}

// break and continue

//break 
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`${i} is detected`);
        break
    }
    console.log(`${i}`);
    
}

// continue 

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`${i} is detected`);
        continue
    }
    console.log(`${i}`);
    
}

// array 
let myArray = ["Consistency", "Dicipline", "Success"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}