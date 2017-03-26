// This is the alphabet array and the variable that guesses the
// computer's letter

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
	"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 
	"W", "X", "Y", "Z"];

var compGuess = letters[Math.round(Math.random(letters)*26)];

// var userGuess = 

// document.write

// This section prints to the front

document.getElementById("win").innerHTML = winCount;

document.getElementById("loss").innerHTML = lossCount;

document.getElementById("guessCount").innerHTML = guessEntry;

document.getElementById("guesses").innerHTML = userBadGuess;

// This section defines the basic variables
var userGuess = document.onkeydown=function(event){
    if (event.key.toUpperCase() === compGuess) {
        winCount++;
    }
    if (event.key.toUpperCase() !== compGuess) {
        guessEntry--;
        document.getElementById('guesses').innerHTML=event.key;
    } 
    if (guessEntry===0) {
        lossCount++;
    }

};

var winCount = 0;

var lossCount = 0;

var guessEntry = 9;

var userBadGuess = [];

// document.onkeyup = function(event) { 
        
//         if (event.key !== 'compGuess') {

//         	guessNum = guessNum - 1;

//             document.getElementById("guessCount").innerHTML = guessNum;
//         }

//         else {
//         	console.log('Nothing');
//         }

//     };



















// for (i = 0; i < letters.length; i++) {
// 	console.log((letters[i]));
// }

