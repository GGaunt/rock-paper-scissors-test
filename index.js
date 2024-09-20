var round = 0;
var humanScore = 0;
var computerScore = 0;

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
}

function playGame() {

}
//get the id from the html element
function onPlayerChose(id) {
    console.log(id);
    playGame(id);
}

playGame();
