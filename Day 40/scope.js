// scope ==> global scope and block scope

if (true){
    var a = 10
    let b = 20
    const c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);


// nested scope

function one(){
    const work = "web dev"

    function two(){
        const tech = "Full Stack"
        console.log(work);
        console.log(tech);
    }
    // console.log(tech);
    two()
    
}
one()
// two()


