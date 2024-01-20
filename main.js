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
let game = false;

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
let score = document.createElement("div");

btnRock.addEventListener('click', () => {
    roundPlay('rock');
    if(playerScore >= 5 || computerScore >= 5) {
        game = true
        gameIsOver()
        return
    }   
    results.textContent = result;
    score.textContent = `Tu puntaje: ${playerScore} \n El puntaje de la máquina: ${computerScore}`
    gameIsOver()
})
btnPaper.addEventListener('click', () => {
    roundPlay('paper');
    if(playerScore >= 5 || computerScore >= 5) {
        game = true
        gameIsOver()
        return
    }
    results.textContent = result;
    score.textContent = `Tu puntaje: ${playerScore} \n El puntaje de la máquina: ${computerScore}`
    gameIsOver()
})
btnScissors.addEventListener('click', () => {
    roundPlay('scissors');
    if(playerScore >= 5 || computerScore >= 5) {
        game = true
        gameIsOver()
        return
    }
    results.textContent = result;
    score.textContent = `Tu puntaje: ${playerScore} \n El puntaje de la máquina: ${computerScore}`

})

function gameIsOver() {
    if(game === true && playerScore > computerScore) {
        score.textContent = `Ganaste ${playerScore} a ${computerScore}`
    } else if (game === true && playerScore < computerScore) {
        score.textContent = `Perdiste ${computerScore} a ${playerScore}`
    } else if (game === true && playerScore === computerScore) {
        score.textContent = "Empate"
    }
}

body.append(results, score);