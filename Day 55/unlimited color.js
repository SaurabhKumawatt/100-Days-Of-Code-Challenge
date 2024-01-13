// random color generate

const randomColor = function(){
    let hex = "0123456789ABCDEF"
    let color = '#'
    for( i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
// console.log(randomColor());
let setIntervalId;
const startChanging = function(){
    if(!setIntervalId){
        setIntervalId = setInterval(startChange, 1000)
    }
     function startChange(){
        document.body.style.backgroundColor = randomColor()
     }
    
}
const stopChanging = function(){
    clearInterval(setIntervalId)
    setIntervalId = null;
}
document.querySelector('#start').addEventListener('click', startChanging)

document.querySelector('#stop').addEventListener('click', stopChanging)
