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

function roundPlay() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt('Elegí pibe: Rock, Paper o Scissors');
    playerSelection = playerSelection.toLowerCase()

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

function game() {
    playerScore = 0;
    computerScore = 0;

    for(let i = 0; i < 5; i++) {
        roundPlay();
    }

    if(playerScore > computerScore) {
        console.log('Ganaste!! El resultado es: ',playerScore,computerScore)
    } else if (playerScore < computerScore) {
        console.log('Perdiste... El resultado es: ', playerScore, computerScore)
    } else {
        console.log('Empate! El resultado es: ', playerScore, computerScore)
    }
}