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

let playerScore = 0;
let computerScore = 0;
let result = "Empieza una ronda"

function roundPlay(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection === "rock" && computerSelection === "rock") {
        result = 'Empate (rock)';
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        result = 'Empate (paper)';
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        result = 'Empate (scissors)';
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = 'Perdiste :( (paper)';
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = 'Perdiste :( (scissors)';
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = 'Perdiste :( (rock)';
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = 'Ganaste :D (scissors)';
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = 'Ganaste :D (Rock)';
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = 'Ganaste :D (Paper)';
        playerScore++;
    }
}

let btnRock = document.createElement("button");
let btnPaper = document.createElement("button");
let btnScissors = document.createElement("button");

btnRock.textContent = "ROCK";
btnPaper.textContent = "PAPER";
btnScissors.textContent = "SCISSORS";

let body = document.querySelector("body");
body.append(btnRock,btnPaper,btnScissors);

let results = document.createElement("div");

btnRock.addEventListener('click', () => {
    roundPlay('rock');
    results.textContent = result;

})
btnPaper.addEventListener('click', () => {
    roundPlay('paper');
    results.textContent = result;
})
btnScissors.addEventListener('click', () => {
    roundPlay('scissors');
    results.textContent = result;
})

body.append(results);