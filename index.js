console.log("Hello world!");

let round = 0;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        computerChoice = "Rock";
    }
    else if (computerChoice === 2) {
        computerChoice = "Paper";
    }
    else if (computerChoice === 3) {
        computerChoice = "Scissors";
    }

    return computerChoice;
};

function playgame() {

}

playGame();