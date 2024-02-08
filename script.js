// Function to randomly select one option
function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// Function to play a 5 round game
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
