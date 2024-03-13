"strict";
// console.log("hello world");

// let choice = ["Rock", "Paper", "Scissors"];
// // console.log(choice.length);

// const getComputerChoice = function () {
//   let items = choice[Math.floor(Math.random() * choice.length)];
//   return items;
// };

// const results = getComputerChoice();
// console.log(results);

// function playRound(playerSelection, computerSelection) {
//   //   playerSelection.toLowerCase();
//   //   console.log(playerSelection);
//   //   console.log(computerSelection);

//   if (computerSelection === "Paper" && playerSelection === "ROCK") {
//     return `Sorry you loose`;
//   } else if (computerSelection === "Rock" && playerSelection === "ROCK") {
//     return "Draw 😞";
//   } else return "You are a winner";
// }

// const playerSelection = "ROCK";
// const computerSelection = getComputerChoice();
// const result = playRound(playerSelection, computerSelection);
// console.log(result);

// function playGame() {
//   let computerScore = 0;
//   let playerScore = 0;

//   if (result === "Sorry you loose") computerScore++;
//   if (result === "You are a winner") playerScore++;

//   console.log(computerScore);
//   console.log(playerScore);

//   playRound();
//   playRound();
//   playRound();
//   playRound();
//   playRound();
// }

// playGame();
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

// let playerSelection = prompt("rock paper or scissors");

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];

  const items = choice[Math.floor(Math.random() * choice.length)];
  return items;
}

getComputerChoice();

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection === computerSelection) {
    return "Its a draw 🤝";
  }

  if (playerSelection == "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose mate 🤡";
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win 🏆";
  }

  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win 🏆";
  }

  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win 🏆";
  }

  if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose mate 🤡";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose mate 🤡";
  }
  //    else {
  //     console.log("You made the wong selection");
  //   }
}

// let playerSelection = "rock";
// console.log(playerSelection);

function playGame() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, Paper, Scissors");
    // console.log(computerSelection);
    console.log(playerScore, computerScore);
    console.log(
      playRound(playerSelection.toLocaleLowerCase(), computerSelection)
    );
  }
  if (playerScore > computerScore) {
    return `You are the Winner gowan SOn 🏆`;
  } else if (computerScore > playerScore) {
    return `You lose sucker! Better luck next time! 🤡`;
  } else return `Tie Game m8 🤝`;
}

console.log(playGame());

// playRound(playerSelection, computerSelection);

// function playGame(func) {
//   //
//   //   for (let i = 1; i < 5; i++) playRound(i);

//   rounds++;
// }
