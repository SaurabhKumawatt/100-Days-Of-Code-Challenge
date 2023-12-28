console.log("Day 39 - 100 Days Of Code Challenge");

// object de-structure

const course = {
    name : "JavaScript",
    price : "999",
    duration : "3 month"
}

console.log(course.name);

// de-structure
const {name} = course
console.log(name);

const {name: newName} = course
console.log(newName);

// API 

// ex :-
// {
//     "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
// }