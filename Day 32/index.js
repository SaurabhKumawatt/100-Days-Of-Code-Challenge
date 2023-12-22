let random = Math.random()
console.log(random)

let num1 = prompt("Enter The First Number: ")
let op = prompt("Enter The operator (+, -, *, /): ")
let num2 = prompt("Enter The Second Number: ")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"

}

if (random > 0.1) {
    // right calculation perform
    alert(`The result is ${eval(`${num1} ${op} ${num2}`)}`)
} else {
    // wrong calculation perform
    op = obj[op]
    alert(`The result is ${eval(`${num1} ${op} ${num2}`)}`)
}