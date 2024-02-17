const plays = ["Rock", "Paper", "Scissors"];
function computerPlay() {
  let randomIndex;
  randomIndex = Math.floor(Math.random() * plays.length);
  return plays[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  playerSelection = playerSelection?.trim().toLowerCase();
  computerSelection = computerSelection?.trim().toLowerCase();

  if (!winningConditions.hasOwnProperty(playerSelection)) {
    return "Invalid selection. Please choose rock, paper, or scissors.";
  }

  if (!["rock", "paper", "scissors"].includes(playerSelection)) {
    alert("Invalid input! Please choose Rock, Paper, or Scissors.");
  }
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (winningConditions[playerSelection] === computerSelection) {
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getUserInput() {
  let playerSelection = prompt("Choose Rock, Paper, or Scissors: ");
  if (playerSelection === null) {
    alert("Game canceled. See you next time!");
    return null;
  }
  return playerSelection;
}
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = getUserInput();
    if (playerSelection === null) {
      return;
    }
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("Won")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    } else if (result.includes("Invalid")) {
      i--;
      continue;
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
