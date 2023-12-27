const user = {
    id : "123abc",
    email : "some@gmail.com",
    isLoggedIn : false
}

// console.log(user);

// singleton object
// const obj = new Object() 
// console.log(obj);

// obj.name = "saurabh"
// console.log(obj);



// object merge

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

const obj3 = {obj1, obj2}
// console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4);

const obj5 = {...obj1, ...obj2}
// console.log(obj5);


// object in object
const igUser ={
    name : {
        fullName :{
            firstName:"Saurabh",
            lastName:"Kumawat"
        }
    }
}
// console.log(igUser.name.fullName.firstName);

// many objects in array
const db = [
    {
        id : "1",
        email: "user1@gmail.com",
        name : "User 1"
    },
    {
        id : "2",
        email: "user2@gmail.com",
        name : "User 2"
    },
    {
        id : "3",
        email: "user3@gmail.com",
        name : "User 3"
    },
    {
        id : "4",
        email: "user4@gmail.com",
        name : "User 4"
    }
]

// access object from array
console.log(db[1]);
console.log(db[1].id);

// access keys from object
console.log(Object.keys(user));

// access values of object
console.log(Object.values(user));

// entries ==> convert key value pair into arrays
console.log(Object.entries(user));

// checking keys in object
console.log(user.hasOwnProperty('email'));
console.log(user.hasOwnProperty('name'));
