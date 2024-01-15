// Day 57 - 100 Days Of Code Challenge

// promises in js

// create promise
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("Async task is completed");
    }, 1000)
    // call resolve to connect then
    resolve()

})

// consume promise
promiseOne.then(function(){
    console.log("Promise consumed");
})

// 2nd way
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("async 2 is resolved");
})

// data process
const promiseThree = new Promise((resolve, reject)=> {
    setTimeout(function(){
        console.log("data is processed");
        resolve({username : "saurabh", email : "exapmle@gmail.com", password : "123"})
    }, 1000)
}).then(function(user){
    console.log(user);
})

// check error 
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // let error = false
//         let error = true
//         if (!error) {
//             resolve({username : "chai", pass : "123"})
//         } else{
//             reject("ERROR : something else")
//         }
//     }, 1000)
// })
// .then(function(user){
//     console.log(user);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=> {
//     console.log("The promise is either resolved or reject");
// })

// 2nd approuch of error handling

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // let error = false
//         let error = true
//         if (!error) {
//             resolve({username : "chai", pass : "lover"})
//         } else{
//             reject("ERROR : something went wrong")
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// async function getUserInfo(){
//     const response = await fetch("https://api.github.com/users/saurabhkumawatt")
//     const data = await response.json()
//     console.log(data);
// }

// getUserInfo()

// using fetch 
fetch("https://api.github.com/users/saurabhkumawatt")
.then((response)=> {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))