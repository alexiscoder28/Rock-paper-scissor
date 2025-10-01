const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const scoreboard = document.getElementById('scoreboard');

let scores = { player: 0, computer: 0 };


const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Show player and computer choices
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;

  let result = "";

  // Game logic
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  // Update result text
  resultDisplay.textContent = result;

  // Remove old colors
  resultDisplay.classList.remove('greenText', 'redText', 'grayText');

  // Apply correct color
  switch (result) {
    case "You win!":
      resultDisplay.classList.add("greenText");
      playerScoreDisplay.textContent = `Player Score: ${++scores.player}`;
      computerScoreDisplay.textContent = `Computer Score: ${scores.computer}`;
      break;
    case "You lose!":
      resultDisplay.classList.add("redText");
        computerScoreDisplay.textContent = `Computer Score: ${++scores.computer}`;
        playerScoreDisplay.textContent = `Player Score: ${scores.player}`;
      break;
    case "It's a tie!":
      resultDisplay.classList.add("grayText");
      break;
  }
}
