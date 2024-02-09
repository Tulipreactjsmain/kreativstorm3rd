let previousPlay = null;
const plays = ["Rock", "Paper", "Scissors"];
function computerPlay() {
  let randomIndex = Math.floor(Math.random() * plays.length);
  let currentPlay;
  do {
    randomIndex = Math.floor(Math.random() * plays.length);
    currentPlay = plays[randomIndex];
  } while (currentPlay === previousPlay);
  previousPlay = currentPlay;
  return currentPlay;
}

const computerChoice = computerPlay();

function playRound(playerSelection, computerSelection) {
  const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (!winningConditions.hasOwnProperty(playerSelection.toLowerCase())) {
    return "Invalid selection. Please choose rock, paper, or scissors.";
  }

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (winningConditions[playerSelection] === computerSelection) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = "rock";

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerPlay()));
  }
}

game();

