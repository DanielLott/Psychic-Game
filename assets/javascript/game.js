var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var winsDisplay = document.getElementById("wins-text");
var lossesDisplay = document.getElementById("losses-text");
var guessesLeftDisplay = document.getElementById("guessesLeft-text");
var guessesSoFarDisplay = document.getElementById("guessesSoFar-text");
winsDisplay.textContent = wins;
lossesDisplay.textContent = losses;  
guessesLeftDisplay.textContent = guessesLeft;
document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    if (userGuess === computerGuess) {
        wins++;
        winsDisplay.textContent = wins;
        guessesLeft = 9;
        guessesLeftDisplay.textContent = guessesLeft;
        guessesSoFarDisplay.innerText = "";
    } else if ((userGuess != computerGuess) && (guessesLeft > 1)) {
        guessesSoFarDisplay.innerHTML += (userGuess + ", ");
        guessesLeft--;
        guessesLeftDisplay.textContent = guessesLeft;
    } else {
        losses++;
        lossesDisplay.textContent = losses;
        guessesLeft = 9;
        guessesLeftDisplay.textContent = guessesLeft;
        guessesSoFarDisplay.innerText = "";
    }
}