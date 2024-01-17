/* Your game is going to play against the computer, so begin with a function
called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or
‘Scissors’. We’ll use this function in the game to make the computer’s play.
Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

/* Write a function that plays a single round of Rock Paper Scissors. The function should take
two parameters - the playerSelection and computerSelection - and then return a string that declares
the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
Account for TIES by re-playing the round. */

function roundPlay(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt('Elegí pibe: Rock, Paper o Scissors');
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        alert('Todos ganan!, vuelve a jugar');
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert('Perdiste :( (paper)')
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert('Perdiste :( (scissors)')
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert('Perdiste :( (rock)')
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert('Ganaste :D (scissors)')
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert('Ganaste :D (Rock)')
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert('Ganaste :D (Paper)')
    }

}

        /* Write a NEW function called game(). Use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end.
You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful.
 */

roundPlay()