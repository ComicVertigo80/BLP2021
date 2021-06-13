# project-1-wheel-of-fortune

Trello Link: https://trello.com/b/twNsmUIT/project-1-wheel-of-fortune

Wire Frame Image
![Wireframe](https://i.imgur.com/HjzXTa4.jpg)

# Project Explanation

This Wheel of Fortune Game was designed using HTML, CSS and vanilla JS.  

- I started out by building the HTML template with the various divs, buttons, etc.. based on my wireframe. 
	- This was done in order to provide myself a visual of the gameboard. Upon reflection I could and should have created a majority
	of this via js constructors.   

- I then did basic styling in order to have a visual of the game board. 
	- Upon reflection I should not have spent time on this initially.  

- The next step was writing the javascript.  
	- I first focused on the spinning wheel, which turned out to be much more difficult than I had anticipated and this portion was moved to the stretch portion of my user stories. 
	- I then focused on the puzzles and game board.  The first attempt I made was to use a table in order to store the puzzles and have them act like "turning tiles".  This approach is most likely the optimal approach, but I ended up creating a simple div with an underscore as a placeholder and used this to create the game board from the init function in my js code.
	- I created the two-player logic and also a function to recognize the next players turn when a guess is incorrect.
	- I created the array of prizes on the spinning wheel and was able to write a successful function that randomizes and returns a value. This works and is returned as an alert when clicking on the spin button.   

Unsolved problems

1. Spinning Wheel Logic: Get wheel to spin on click. (This was working, but I broke it attempting to get the prize logic in place.)
3. Clear the guess input field upon each guess and ensure both upper and lower case letters are accepted.
2. Return the matching prize based on the spinning wheel end position. Ideally using canvs wheel drawing.
3. Store the prize amount and add it to the players score, multiplied by the number of correct letters.
4. Create buy vowel logic that will reduce the players score for each vowel purchased.
5. Create Bankrupt and Lose Turn Logic. This is dependent on getting a working matching prize.
6. Store Game winnings for correctly solving the puzzle and add it to the total bank for the player.
7. Store Player Names (This was working, but was clunky and I removed it for now.)

Future enchancements

1. Learn how to create a wheel by drawing it in canvas with sections representing the "pie pieces".  
2. Add better styling.
3. Re-format the game board to have a better representation of "turning tiles".

Major Lesson Learned  

Planning!!!  I should have spent more time at the beginning of the project in order to properly pseudocode and map out all of the game steps that needed to be built.  Also included is taking time to think out how best to approach each item. i.e. contructor functions, prototype functions, what variables do I need and should they be global, etc...


Conclusion  

This project was much more difficult than I anticipated it would be as I did not properly plan out all of the needed steps that would constitute a working wheel of fortune game.  I did learn a lot and am excited to finish this game to it's completion.  Practice for me needs to focus on CSS positioning, and writing javascript functions.  


End of Week Finished Product
![Final](https://i.imgur.com/IGcvYVP.png)


