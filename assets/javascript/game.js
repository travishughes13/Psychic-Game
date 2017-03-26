// This is the alphabet array and the variable that guesses the
// computer's letter and defines the initial values for the 
// guesses

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
	"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 
	"W", "X", "Y", "Z"];

var winCount = 0;

var lossCount = 0;

var guessEntry = 9;

var userBadGuess = [];

var compGuess = letters[Math.round(Math.random(letters)*letters.length)];

// This section defines the actions that occur when a user presses a key
var userGuess = document.onkeyup=function(event){

// This section should remove a remaining try from the total guesses
    guessEntry-=1;

// It should also add the key entered to the userBadGues array
    if (event.key.toUpperCase() !== compGuess) {
        userBadGuess.push(event.key.toUpperCase());
        document.getElementById('guesses').innerHTML=userBadGuess.join(', ');
        document.getElementById('guessCount').innerHTML=guessEntry;
    }         


// This defines the reset condition if the player fails to guess right
    if (guessEntry==0) {
        document.getElementById('loss').innerHTML=lossCount+1;
        document.getElementById('guessCount').innerHTML=9;
        guessEntry=9;
        lossCount+=1;
        userBadGuess=[];
        compGuess = letters[Math.round(Math.random(letters)*letters.length)];
    }

   
// This section should say what should happen when a user gets it right
    else if (event.key.toUpperCase() === compGuess) {
        document.getElementById('win').innerHTML=winCount += 1;
        document.getElementById('guessCount').innerHTML=guessEntry = 9;
        document.getElementById('guesses').innerHTML="";
        userBadGuess=[];
        compGuess = letters[Math.round(Math.random(letters)*letters.length)];
    }
};

// This section prints the original variable counts to the front

document.getElementById("win").innerHTML = winCount;

document.getElementById("loss").innerHTML = lossCount;

document.getElementById("guessCount").innerHTML = guessEntry;

document.getElementById("guesses").innerHTML = userBadGuess;