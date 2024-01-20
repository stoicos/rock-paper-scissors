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

function roundPlay(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log('Empate (rock)')
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log('Empate (paper)')
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log('Empate (scissors)')
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log('Perdiste :( (paper)')
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log('Perdiste :( (scissors)')
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log('Perdiste :( (rock)')
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log('Ganaste :D (scissors)')
        playerScore++
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log('Ganaste :D (Rock)')
        playerScore++
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log('Ganaste :D (Paper)')
        playerScore++
    }
}

let btnRock = document.createElement("button");
let btnPaper = document.createElement("button");
let btnScissors = document.createElement("button");

btnRock.textContent = "ROCK"
btnPaper.textContent = "PAPER"
btnScissors.textContent = "SCISSORS"

let body = document.querySelector("body")
body.append(btnRock,btnPaper,btnScissors)

btnRock.addEventListener('click', () => {
    roundPlay('rock')
})
btnPaper.addEventListener('click', () => {
    roundPlay('paper')
})
btnScissors.addEventListener('click', () => {
    roundPlay('scissors')
})