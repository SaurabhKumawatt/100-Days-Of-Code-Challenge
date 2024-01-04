console.log("Day 46 - 100 Days Of Code Challenge");


// filter map and reduce

const coding = ["Js", "py", "Cpp"]
// const newVal = coding.forEach( (item) => item )
// console.log(newVal); // output undefined

// filter

const myNum = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]
const newNum = myNum.filter( (num) => num>4 )
// console.log(newNum);


// multiple objects in array
const books =[
    {
        bookName : "Book one",
        bookAuthorName : "Author 1",
        bookGenre : "History",
        bookPublish : 1999
    },
    {
        bookName : "Book two",
        bookAuthorName : "Author 2",
        bookGenre : "Fraction",
        bookPublish : 2002
    },
    {
        bookName : "Book three",
        bookAuthorName : "Author 3",
        bookGenre : "Non-Fraction",
        bookPublish : 1991
    },
    {
        bookName : "Book four",
        bookAuthorName : "Author 4",
        bookGenre : "Web Technologies",
        bookPublish : 2004
    },
    {
        bookName : "Book five",
        bookAuthorName : "Author 5",
        bookGenre : "Database",
        bookPublish : 2006
    },
    {
        bookName : "Book six",
        bookAuthorName : "Author 6",
        bookGenre : "History",
        bookPublish : 2000
    }
]

// const userBooks = books.filter( (bk) =>  bk.bookGenre === "History")
const userBooks = books.filter( (bk) =>  bk.bookGenre === "History" && bk.bookPublish >= 2000)
// console.log(userBooks);

// map
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]
// const newNums = myNums.map( (num) => num + 10 )
// console.log(newNums);


// chaining
const myNums = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]

const newNums = myNums
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 30 )
// console.log(newNums);                


// reduce ==> user supplied reduces
const newNumer = [1, 2, 3, 4]
const myTotal = newNumer.reduce( function(acc, curVal) {
    // console.log(`acc : ${acc} and curVal : ${curVal}`);
    return acc + curVal
}, 0) 
// console.log(myTotal);

// shoping cart example
const shopingCart = [
    {
        course : "JS",
        price : 999
    },
    {
        course : "PY",
        price : 1999
    },
    {
        course : "DS",
        price : 2999
    },
    {
        course : "WEB",
        price : 3999
    }
]

const toPay = shopingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(toPay);