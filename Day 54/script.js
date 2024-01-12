// events in js
// bubbling - false (by default)
// capturing - true 

// document.querySelector('#images').addEventListener('click', function(e){
//     console.log("i am clicked inside images");
// }, true)

// document.getElementById('river').addEventListener('click', function(e){
//     // console.log(e)
//     console.log("i am river")
//     // alert('Clicked')
// }, true)

// prevent default
// document.getElementById('github').addEventListener('click', function(e){
//     e.preventDefault()
//     console.log("i am clicked but not work :(");

// }, false)

// remove images on click
document.querySelector('#images').addEventListener('click', function (e){
    // let removeIt = e.target.parentNode
    // removeIt.remove()
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
}, false)

// timeStamp
let button = document.querySelector('button')
button.addEventListener('click', function(e){
    let time = document.getElementById('time')
    time.firstChild.nodeValue = e.timeStamp

})
