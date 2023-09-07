
const choices = ["ROCK", "PAPER", "SCISSORS"]
let playerScore = 0;
let computerScore = 0;
const maxScore = 5;
const result = document.getElementById('result');

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random()*3)
    return choices[randomIndex];
}

function disableButtons(){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function updateScore() {
    const displayScore = document.getElementById('score');
    displayScore.textContent = `Player:${playerScore} Computer:${computerScore}`;

    if (playerScore === maxScore) {
        result.textContent = 'Congratulations! You Win the Game!'
        disableButtons();
    } else if (computerScore === maxScore) {
        result.textContent = 'Computer Wins the Game!'
        disableButtons();
    }
}


function playRound(playerSelection, computerSelection) {

    let resultMessage = "";

    if (playerSelection === computerSelection){
        resultMessage = "It's a Tie"
    }

    else if ( 
    (playerSelection === "PAPER" && computerSelection === "ROCK") || 
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") || 
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") 
    ) {
        playerScore++;
        resultMessage =  `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
     (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
     (playerSelection === "PAPER" && computerSelection === "SCISSORS") 
    ) {
        computerScore++;
        resultMessage =  `You Lose! ${computerSelection} beats ${playerSelection}`
    }

    result.textContent = resultMessage;
    updateScore();
}





    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    

    rock.addEventListener('click', () => playRound("ROCK", getComputerChoice()));
    paper.addEventListener('click', () => playRound("PAPER", getComputerChoice()))
    scissors.addEventListener('click', () => playRound("SCISSORS", getComputerChoice()))
