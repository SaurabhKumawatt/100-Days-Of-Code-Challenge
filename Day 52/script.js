const clock = document.getElementById('clock')



setInterval( function(){
    const time = new Date()
    // console.log(time.toLocaleTimeString());
    const localTime = time.toLocaleTimeString()
    clock.innerHTML = `${localTime}`
}, 1000)