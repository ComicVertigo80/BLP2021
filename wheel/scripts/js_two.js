/* Code adapted from https://github.com/jengleberg/project-1-wheel-of-fortune */

// Selector Elements from HTML
var solvePuzzle = document.getElementById("solve");
var guessButton = document.getElementById("guessButton");
var treasureMap = document.getElementById("treasuremap");

// Game Variables
var puzzles = ["Chesterwood"];
var puzzle = "";
var answers = [];
var revealMap = false;
var fullSolve = false;

// Function that initializes the game by randomly choosing a puzzle from the puzzles array
function init() {
    puzzle = puzzles[Math.floor(Math.random() * puzzles.length)]; 

    // Creates the blank lines for the letter guesses
    answers = [];
    for (var i = 0; i < puzzle.length; i++)
    {
        answers[i] = "_";

        // For multiple words, clear space blank
        if(puzzle[i] == " ")
        {
            answers[i] = "&nbsp;";
            // Don't need to track as win check looks for underscores
        }
    }

    // Joins the answer with the random puzzle and displays the message let's play
    document.getElementById("answer").innerHTML= answers.join(" ");
    document.getElementById("message").innerHTML= "LET'S PLAY!";
}

// initializes the puzzle
init();

// function that allows player to guess the letter
// On clicking the guess button adds the input of the guess and compares it to the puzzle answer
guessButton.addEventListener("click", function() {
	var guess = document.getElementById("guess").value;
	var showThisMessage = "";
// If the guess button is clicked and nothing is in the input field display message	
	if (guess.length === 0) 
	{
		showThisMessage = "Please enter a letter";
		//TODO BLP - disable button guess if empty
	}
// If the guess button is clicked and there are two letters in the input field display message	
	else if (guess.length !== 1) 
	{
		showThisMessage = "Please enter only a single letter";
// Need to add logic for a non letter character and also to accept capital or lower case
	} else {
// If the guess is correct add it to the answer field(s) and display message
	for (var i = 0; i < puzzle.length; i++) 
	{
		if (puzzle[i].toLowerCase() === guess.toLowerCase()) 
		{
			// Set answer field equal to puzzle to maintain desired casing
			answers[i] = puzzle[i];
			showThisMessage= "YES! Show us " + guess + ".";
		} 
	}
// To count remaining letters.  Should have counted correct letters for multiplying prize if correct guess
	var remainingLetters = 0;
		for (i = 0; i < puzzle.length; i++) 
		{
			if (answers[i] === '_') {
				remainingLetters += 1;
			}
		}
// if remaining letters in answer is zero the puzzle is solved		
		if (remainingLetters == 0) {
			showThisMessage = "YES! You Solved the Puzzle!";
			revealMap = true;
		} 
// If incorrect guess display message and run next player function
		if (showThisMessage === "") {
			showThisMessage = "Sorry, try again!";
		} 
// Code needs to be cleaned up
		document.getElementById("answer").innerHTML = answers.join(" ");
		document.getElementById("guess").innerHTML = showThisMessage;
		}
		document.getElementById("message").innerHTML = showThisMessage;
		// TODO BLP somehow pass revealMap or use it back to home page to show map
	});
