# rock-paper-scissors-game

so we want to create function to get computer scoe

then we want play a round
so we compare to inputs
and produce a result for each one

then we want to
play the game 5 times
and produce and overall winner

Implementation

i first declared two variables and assigned the value 0 to them //number data type

then I created a function to determine the computer selection, I made an array of three choices
and then used Math.random and Math.floor methods to return the random selection.

at this stage player selection was set to rock.

i then created a function to playRound, taking in two paramaters for both selctions,
i then created if/else statement to figure out a winner for all the throws
incrementing score variables with each winner.
i passed the player and computer selctions that i generated into the functio as arguements.

i then created a playGame function, in this function i looped over the playRound function 5 times to play the game,
adding the player and computer selection to the loop to get a new value each time. i then set the playerSelection value to a prompt to use that as the value for my selection, i also set the answer to incase-sensitive to allow capitalization in input, using toLowerCase().

after the loop has ran 5 times, we exited the loop and compared the scores of each player and determind the winner of the game.
