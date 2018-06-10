//<!--setting up variables-->
var psychicLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Wins = 0;
var Losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

document.onkeyup = function (event) {
    //setting up event key function//
    var userGuess = event.key;
    //continuously add new guesses to the user guesses array//
    guessesSoFar.push(userGuess);
    var psychicAnswer = psychicLetters[Math.floor(Math.random() * psychicLetters.length)];


    //setting up clear function once user has reached guess limit//
    var reset = function() {
    guessesLeft = 9;
    guessesSoFar = [];
    }


   //win: setting up score counter to add 1 to Wins everytime user guesses the right letter//

if (userGuess === psychicAnswer) {
    Wins++;
    guessesLeft = 8;
    }    
   //wrong guess: when user's guess doesn't match the app's, reduce Guesses left by 1//
else {
    guessesLeft--;
    }    
   //lose: when user's guesses left = 0, user losses goes up by 1//
if (guessesLeft === 0) {
    Losses++ ;
    guessesLeft = 8;
    reset();
    }

    //setting up innerHTML 

var html = "<p>Guess what letter I'm thinking of.....</p>" + "<p>Wins: " + Wins + "</p>" + "<p>Losses: " + Losses + "<p>Guesses Left: " + guessesLeft + "<p>Your Guesses So Far: " + guessesSoFar.join(', ');
document.getElementById("pennpsychic").innerHTML = html;

}





