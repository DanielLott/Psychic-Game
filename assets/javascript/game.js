// Declaring array of letters (alphabet):
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//Creates variable(object?) with a reference to an element id location, declares the number variable, and pushes initial values to said location
var winsDisplay = document.getElementById("wins-text");
var wins = 0;
winsDisplay.innerText = wins;
//same
var lossesDisplay = document.getElementById("losses-text");
var losses = 0;
lossesDisplay.innerText = losses;
//same
var guessesLeftDisplay = document.getElementById("guessesLeft-text");
var guessesLeft = 9;
guessesLeftDisplay.innerText = guessesLeft;
//Creates variable(object?) with a reference to an element id location
var guessesSoFarDisplay = document.getElementById("guessesSoFar-text");
//Creates and stores initial computerGuess
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
//Function that resets guessesLeft to 9, pushes it to the screen, clears the guessesSoFar values, and creates a new computerGuess
function clearGuesses() {
    guessesLeft = 9;
    guessesLeftDisplay.innerText = guessesLeft;
    guessesSoFarDisplay.innerText = "";
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}
//Function/event that runs every time a key is pressed
document.onkeyup = function(event) {
    //captures and stores key pressed to variable
    var userGuess = event.key.toLowerCase();
    //logging right answer so I can see it in console and win if desired
    console.log(computerGuess);
    //if guess is correct, up the wins, push it to screen, and run clear function
    if (userGuess === computerGuess) {
        wins++;
        winsDisplay.innerText = wins;
        clearGuesses();
    //if guess is wrong and it's the first guess, subtract one from guessesLeft, push that to the screen, and push the incorrect guess to the screen
    } else if ((userGuess != computerGuess) && (guessesLeft > 8)) {
        guessesLeft--;
        guessesLeftDisplay.innerText = guessesLeft;
        guessesSoFarDisplay.innerText += (userGuess);
    //if guess is wrong and it's the second-eighth guess, subtract one from guessesLeft, push that to the screen, and push a comma, a space, and the incorrect guess to the screen
    } else if ((userGuess != computerGuess) && (guessesLeft > 1)) {
        guessesLeft--;
        guessesLeftDisplay.innerText = guessesLeft;   
        guessesSoFarDisplay.innerText += (", " + userGuess);
    //the only option left is that the guess is incorrect and it's the ninth guess - this time, the losses go up by one and is pushed to the screen - the clear function is run to start again!    
    } else {
        losses++;
        lossesDisplay.innerText = losses;
        clearGuesses();
    }
}