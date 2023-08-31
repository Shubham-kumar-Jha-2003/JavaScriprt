let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput =  document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = []
let numOfGuess = 1;

let playGame = true

if(playGame) {

    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuesses(guess);
        

    })
}

function validateGuesses(guess) {

    //
    if(isNaN(guess)) {
        alert('Please Enter a valid number');

    } else if(guess < 1 ) {
        alert('Please Enter a number more then 1');
        
    } else if(guess > 100 ) {
        alert('Please Enter a number less then 100');
        
    } else {
        prevGuess.push(guess)

        if(numOfGuess === 11) {
            displayGuess(guess)
            // displayMessage(`Game Over. Random Number was : ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

   
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame();
    } else if(guess < randomNumber) {
        displayMessage(`Number is TOO low`)
    } else {
        displayMessage(`Number is TOO High`)
    }
}

function displayGuess(guess) {
    userInput.value = ""
    guessSlot.innerHTML += `${guess},  `
    numOfGuess++
    remaining.innerHTML = `${11 - numOfGuess}`
    

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message} </h2>` 
}

function endGame() {

    userInput.value = ""
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();


}

function newGame() {

    const newGameButton = document.querySelector('#newGame')

    newGameButton.addEventListener('click', function(e)  {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numOfGuess = 1
        guessSlot.innerHTML = ''
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        remaining.innerHTML = `${11 - numOfGuess}`
        playGame = true;
    })

}
