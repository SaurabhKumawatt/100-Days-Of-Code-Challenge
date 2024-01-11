let randomNumber = parseInt(Math.random() * 100 + 1)
// console.log(randomNumber);
const userGuess = document.getElementById('guessNumber')
const submit = document.querySelector('button')
const previousGuess = document.querySelector('.preGuess')
const remainGuess = document.querySelector('.remainGuess')
const startOver = document.querySelector('.input-update')
const lowOrHi = document.querySelector('.loworhi')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true


if (playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userGuess.value)
        // console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess (guess){
    if (isNaN(guess)){
        alert("Enter a valid Number")
    } else if ( guess < 1) {
        alert("Enter a Number grater then 1")
    } else if ( guess > 100){
        alert("Enter a Number less then 100")
    } else {
        prevGuess.push(guess)
        if( numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over! Random Number is ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess (guess){
    if ( guess === randomNumber){
        displayMessage(`You guessed it Right ${randomNumber}`)
        endGame()
    } else if( guess < randomNumber){
        displayMessage(`The number is TOO low`)
    } else if ( guess > randomNumber){
        displayMessage(`The number is TOO High`)
    }
}
function  displayGuess (guess){
    userGuess.value = ''
    previousGuess.innerHTML += `${guess}, `
    numGuess++;
    remainGuess.innerHTML = `${11 - numGuess}`
}
function displayMessage (message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame (){
    userGuess.value = ''
    userGuess.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 class="newGame" >Start New Game</h2>'
    startOver.appendChild(p)
    playGame = false;
    newGame();
}
function newGame (){
    const newGameButton = document.querySelector('.newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = [];
        numGuess = 1;
        remainGuess.innerHTML = `${10 - numGuess}`
        previousGuess.innerHTML = ''
        userGuess.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true

    })
}
