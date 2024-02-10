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

  console.log(playRound(playerSelection, computerChoice));

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose Rock, Paper, or Scissors: ");

    // Convert the input to lowercase and check if it's valid
    playerSelection = playerSelection.toLowerCase();
    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
      console.error(
        "Error: Invalid input! Please choose Rock, Paper, or Scissors."
      );

      //handles invalid input
      i--;
      continue;
    }

    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    // Score tracking
    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
  }

  // Displaying the final result
  if (playerScore > computerScore) {
    console.log("Congratulations, you won the game!");
  } else if (playerScore < computerScore) {
    console.log("Oops, you lose the game!");
  } else {
    console.log("Well done, It's a draw!");
  }
}

// Calling the game function to start playing
game();
