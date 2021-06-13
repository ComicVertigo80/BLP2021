
// Selector Elements from HTML
var p1Name = document.getElementById("p1name");
var p2Name = document.getElementById("p2name");
var p1RoundScore = document.getElementById("p1score");
var p2RoundScore = document.getElementById("p2score");
var p1GameScore = document.getElementById("p1bank");
var p2GameScore = document.getElementById("p2bank");
var solvePuzzle = document.getElementById("solve");
var newGame = document.getElementById("newGame");
var guessButton = document.getElementById("guessButton");


// Game Variables
var puzzles = ["Chesterwood"];
var puzzle = "";
var answers = [];
var player1 = "Player 2";
var player2 = "Player 1";
var currentPlayer = player1;
var pScore = {p1RoundScore: 0, p2RoundScore: 0};
var round = 1;
var prize = "";

// Spin Results
var spinValues = ['LoseTurn', '800', '350', '450', '700', '300', '600', '5000', '300', '600',
				'300', '500', '800', '550', '400', '300', '900', '500', '300', '900', 'Bankrupt', '600', '400', '300'];

// Function that pulls a random value from the spinValues array
 function spinAmount() {
	 return spinValues[Math.floor((Math.random()*spinValues.length))];
}

// Event Listener when spin button is clicked to return the spin amount.
spin.addEventListener('click', function() {
	alert(spinAmount());
});
	
// Function that initializes the game by randomly choosing a puzzle from the puzzles array
function init() {
	puzzle = puzzles[Math.floor(Math.random() * puzzles.length)]; 

// Creates the blank lines for the letter guesses
	answers = [];
	for (var i = 0; i < puzzle.length; i++) {
	answers[i] = "_";
}
// Joins the answer with the random puzzle and displays the message let's play
	document.getElementById("answer").innerHTML= answers.join(" ");
    document.getElementById("message").innerHTML= "LET'S PLAY!";
}

// initializes the first puzzle
init();

// function that allows player to guess the letter
// On clicking the guess button adds the input of the guess and compares it to the puzzle answer
guessButton.addEventListener("click", function() {
	var guess = document.getElementById("guess").value;
	var showThisMessage = "";
// If the guess button is clicked and nothing is in the input field display message	
	if (guess.length === 0) {
		showThisMessage = "Please enter a letter";
	}
// If the guess button is clicked and there are two letters in the input field display message	
	else if (guess.length !== 1) {
		showThisMessage = "Please enter only a single letter";
// Need to add logic for a non letter character and also to accept capital or lower case
	} else {
// If the guess is correct add it to the answer field(s) and display message
	for (var i = 0; i < puzzle.length; i++) {
		if (puzzle[i] === guess) {
			answers[i] = guess;
			showThisMessage= "YES! Show us " + guess + ".";
			pScore.innerHTML=prize;
		} 
	}
// To count remaining letters.  Should have counted correct letters for multiplying prize if correct guess
	var remainingLetters = 0;
		for (i = 0; i < puzzle.length; i++) {
			if (answers[i] === '_') {
				remainingLetters += 1;
			}
		}
// if reamining letters in answer is zero the puzzle is solved		
		if (remainingLetters == 0) {
			showThisMessage = "YES! You Solved the Puzzle!";
		} 
// If incorrect guess display message and run next player function
		if (showThisMessage === "") {
			showThisMessage = "Sorry, try again!";
			nextPlayer();
		} 
// Code needs to be cleaned up
		document.getElementById("answer").innerHTML = answers.join(" ");
		document.getElementById("guess").innerHTML = showThisMessage;
		}
		document.getElementById("message").innerHTML = showThisMessage;
	});

// Next player function
function nextPlayer() {
  if (currentPlayer == player1) {
  	currentPlayer = player2;
  } else {
  	currentPlayer = player1;
	}
}

// First attempt at bankrupt and scoring function
function updateScore (prize, numGuess, Bankrupt) {
	if(Bankrupt) {
	}
}


 newGame.addEventListener("click", function(){
 	init();
 });



// newGame function
newGame.addEventListener("click", function() {
	init();
});


var wheel = document.getElementById('wheel');
wheel.addEventListener('click', onClick, false);


function onClick() {
    wheel.removeAttribute('style');
    var deg = 500 + Math.round(Math.random() * 500);
    var css = '-webkit-transform: rotate(' + deg + 'deg);';
    wheel.setAttribute(
    'style', css
    );
    

}


