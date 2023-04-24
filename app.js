let userScore = 0;
let computerScore = 0;
let gameStatus = "play again";

// Function to generate random choice for computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Function to compare user's choice and computer's choice to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "draw";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// Function to display result and update scores
function displayResult(result, userChoice, computerChoice) {
  console.log(`You chose ${userChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  if (result === "win") {
    console.log("You win!");
    userScore++;
  } else if (result === "lose") {
    console.log("You lose!");
    computerScore++;
  } else {
    console.log("It's a draw!");
  }
  console.log(`Your score: ${userScore}`);
  console.log(`Computer's score: ${computerScore}`);
}

// Function to prompt user to play again or quit
function promptPlayAgain() {
  rl.question("Do you want to play again? (yes/no): ", (answer) => {
    if (answer.toLowerCase() === "no") {
      gameStatus = "quit";
      rl.close();
    } else {
      gameStatus = "play again";
    }
  });
}

// Main game loop
function playGame() {
  rl.question("Welcome to Rock, Paper, Scissors! Choose an option (rock/paper/scissors): ", (userChoice) => {
    userChoice = userChoice.toLowerCase();
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
      console.log("Invalid choice. Please choose again.");
      playGame();
    } else {
      const computerChoice = getComputerChoice();
      const result = determineWinner(userChoice, computerChoice);
      displayResult(result, userChoice, computerChoice);
      promptPlayAgain();
      if (gameStatus === "play again") {
        playGame();
      }
    }
  });
}

// Start the game
playGame();
 