
function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}


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


function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose Rock, Paper, or Scissors: ");
    if (playerSelection == null){
      console.error("Invalid input! Please choose Rock, Paper, or Scissors.")
      i--;
      continue;
    }


    playerSelection = playerSelection.toLowerCase();
    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
      console.error(
        "Error: Invalid input! Please choose Rock, Paper, or Scissors."
      );


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
  }


  if (playerScore > computerScore) {
    console.log("Congratulations, you won the game!");
  } else if (playerScore < computerScore) {
    console.log("Oops, you lose the game!");
  } else {
    console.log("Well done, It's a draw!");
  }
}

game();
