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

function playRound(playerSelection, computerSelection) {
  const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (!winningConditions.hasOwnProperty(playerSelection.toLowerCase())) {
    return "Invalid selection. Please choose rock, paper, or scissors.";
  }

  playerSelection = playerSelection.trim().toLowerCase();
  computerSelection = computerSelection.trim().toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (winningConditions[playerSelection] === computerSelection) {
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose Rock, Paper, or Scissors: ");
    if (playerSelection === null) {
      alert("Game canceled. See you next time!");
      return;
    }
    playerSelection = playerSelection.toLowerCase().trim();
    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
      alert("Invalid input! Please choose Rock, Paper, or Scissors.");
      i--;
      continue;
    }
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("Won")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
    console.log(`Score: ${playerScore} : ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log("Congratulations, you won the game!");
  } else if (playerScore < computerScore) {
    console.log("Oops, you lose the game!");
  } else {
    console.log("Well done, It's a draw!");
  }
  const totalScore = `Total score: ${playerScore} : ${computerScore}`;
  return totalScore;
}

alert(
  "Welcome to the Rock, Paper, Scissors Game!\n\nYou are about to engage in a battle of wits against the computer. Are you ready to test your luck and strategy?\n\nLet's begin!"
);
game();
