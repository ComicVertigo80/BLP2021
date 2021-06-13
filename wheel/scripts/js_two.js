/* Code adapted from https://github.com/jengleberg/project-1-wheel-of-fortune */

// Selector Elements from HTML.
var solvePuzzle = document.getElementById("solve");
var guessButton = document.getElementById("guessButton");
var treasureMap = document.getElementById("treasuremap");

/* Puzzle solution pool. */
var puzzles = ["Chesterwood"];

/* Entered content from user."
var puzzle = "";

/* Filled out answer so far.*/
var answers = [];

/* Whether or not to reveal the map.*/
var revealMap = false;

/* Whether or not user has done full solve. TODO BLP may not need*/
var fullSolve = false;

// Function that initializes the game by randomly choosing a puzzle from the puzzles array.
function init()
{
    // Randomly select a puzzle from the pool.
    puzzle = puzzles[Math.floor(Math.random() * puzzles.length)]; 

    // Creates the blank fields for the letter guesses
    answers = [];
    for (var i = 0; i < puzzle.length; i++)
    {
        answers[i] = "_";

        // For multiple words, clear spaces.
        if(puzzle[i] == " ")
        {
            answers[i] = "&nbsp;";
            // Don't need to track as win check looks for underscores.
        }
    }

    // Joins the answer with the random puzzle and displays the message let's play.
    document.getElementById("answer").innerHTML= answers.join(" ");
    document.getElementById("message").innerHTML= "LET'S PLAY!";
}

// Initializes the puzzle.
init();

// Function that allows player to guess the letter or full solution.
guessButton.addEventListener("click", function()
{
    var guess = document.getElementById("guess").value;
    var showThisMessage = "";

    // Guess submitted with no content.
    if (guess.length === 0) 
    {
        showThisMessage = "Please enter a guess!";
        //TODO BLP - disable button guess if empty
    }
    // Guess submitted for a solve.
    else if (guess.length !== 1) 
    {
        if (puzzle.toLowerCase() === guess.toLowerCase()) 
        {
            // Set answer field equal to puzzle to maintain desired casing
            answers = guess;
            for (var i = 0; i < puzzle.length; i++) 
             {
                 answers[i] = puzzle[i];
             }

            showThisMessage= "YES! You guessed it!!";
        }
        else
        {
             showThisMessage = "Nope, that isn't the correct answer!";
        }
    }
    else 
    {
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

        // To count remaining letters.
        var remainingLetters = 0;
        for (i = 0; i < puzzle.length; i++) 
        {
            if (answers[i] === '_')
            {
                remainingLetters += 1;
            }
        }
        // if remaining letters in answer is zero the puzzle is solved        
        if (remainingLetters == 0)
        {
            showThisMessage = "YES! You Solved the Puzzle!";
            revealMap = true;
        } 
        //TODO BLP kludge because i dont get the math
        if (answers === puzzle)
        {
            showThisMessage = "YES! You Solved the Puzzle!";
            revealMap = true;
        }
         // If incorrect guess display message and run next player function
        if (showThisMessage === "")
        {
            showThisMessage = "Sorry, try again!";
        }

        // Update parent HTML elements.
        document.getElementById("answer").innerHTML = answers.join(" ");
        document.getElementById("guess").innerHTML = showThisMessage;
    }
    
        document.getElementById("message").innerHTML = showThisMessage;
        // TODO BLP somehow pass revealMap or use it back to home page to show map
});
