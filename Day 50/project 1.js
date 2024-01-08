// select button using query selector
const buttons = document.querySelectorAll(".button")

// body select
const body = document.querySelector("body")

buttons.forEach(function (button){
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id
            body.style.color = "black"
        }
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id
            body.style.color = "white"
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id
            body.style.color = "white"
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id
            body.style.color = "white"
        }
    })
})