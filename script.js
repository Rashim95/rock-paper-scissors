
const choices = ["ROCK", "PAPER", "SCISSORS"]
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random()*3)
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "Tied"
    }

    else if ( 
    (playerSelection === "PAPER" && computerSelection === "ROCK") || 
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") || 
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") 
    ) {
        playerScore++;
        return `You Won! ${playerSelection} beats ${computerSelection}`
    }
    else if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
     (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
     (playerSelection === "PAPER" && computerSelection === "SCISSORS") 
    ) {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    
    return "Invalid Selection! Please choose ROCK, PAPER, or SCISSORS."

}

function game() {
    for (let i=1; i<6; i++){
        let userInput = prompt(`Round ${i} : Enter your Choice from ROCK, PAPER & SCISSORS`)
        let playerSelection = userInput.toUpperCase();
        let computerSelection = getComputerChoice();
        
        let gameResult = playRound(playerSelection, computerSelection);
        console.log(gameResult);
    }


    if (playerScore > computerScore) {
    console.log( `You Win!! Player:${playerScore} Computer:${computerScore}`)
    }
    else if (computerScore > playerScore) {
    console.log (`You Lose!! Player:${playerScore} Computer:${computerScore}`)
    }
    else console.log( `Tied!! Player:${playerScore} Computer:${computerScore}`)

}

game();