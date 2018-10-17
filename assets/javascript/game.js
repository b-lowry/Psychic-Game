// computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//game variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];



//function for when a guess is made
userName = prompt("What is your name?");
alert("Hi, " + userName + ". Welcome to my game. Press any key to guess a letter.");
document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess.toLowerCase() === computerGuess) {
        wins++;
        alert("Congrats, you won. Somehow...");
        guessedLetters = [];
        guessesLeft = 9;
    } else if (userGuess !== computerGuess) {
        guessesLeft--;
        guessedLetters.push(userGuess);

      }
    
      //reset
    if (guessesLeft < 0) {
        alert("Oh what a shock..you lost");
        guessesLeft = 9;
        losses++;
        guessedLetters = [];
    } 


    var html =
    "<h1>THE PSYCHIC GAME</h1>" + 
    "<h2>Can you guess what letter I'm thinking of?</h2>" +
    "<p class='stat'>WINS: " + wins + "</p>" + 
    "<p class='stat'>LOSSES: " + losses + "</p>" +
    "<p class='stat'>GUESSES LEFT: " + guessesLeft + "</p>" +
    "<p class='stat'>YOUR GUESSES SO FAR: " + guessedLetters.join(", ") + "</p>" +
    "<img src='assets/images/psychic.jpg' id='img1' alt='psychic' width=200>";
 

  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;
};
