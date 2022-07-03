'use strict';

/*

// QuerySelector gets the first html element with the specified class/id and grab the textContent
console.log(document.querySelector('.message').textContent);

// Change the content of the element
document.querySelector('.message').textContent = 'Correct Number!🎉';

// Log it again to make sure it has changed
console.log(document.querySelector('.message').textContent);


// use value to retrieve data from input field
console.log(document.querySelector('.guess').value);

*/

// Generate random number
const secretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

// Store the random number and print to console for testing
let randomNumber = secretNumber();
console.log(randomNumber);

// User score that will be subtracted from each time the random number is wrong
let currentScore = Number(document.querySelector('.score').textContent);

// Save current high score that will be checked each time user guess is correct
let highScore = Number(document.querySelector('.highscore').textContent);

// Game logic
const userGuess = function () {
  // Users current guess that will be checked
  const guess = Number(document.querySelector('.guess').value);

  // If the user has not entered a guess
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please enter a number before checking!📛';
  }
  // If the user has guessed correctly
  else if (guess === randomNumber) {
    // If a new high score has been reached
    if (currentScore > highScore) {
      document.querySelector('.highscore').textContent = currentScore;
    }
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.message').textContent = `🎉Correct number!`;
    document.querySelector('body').style.backgroundColor = '#60b347';

    // If the guess is incorrect
  } else {
    // Subtract 1 from the current score and continue to guess
    currentScore -= 1;
    guess > randomNumber
      ? (document.querySelector('.message').textContent = 'Too high!📈')
      : (document.querySelector('.message').textContent = 'Too low!📉');
    document.querySelector('.score').textContent = currentScore;
    gameOver();
  }
};

// When user score reaches 0, game will send a message then restart
const gameOver = function () {
  if (currentScore === 0) {
    document.querySelector('.message').textContent = 'You lost the game!💥';
    document.querySelector('body').style.backgroundColor = '#FF0000';
  }
};

// When user clicks "Again" game will reset
const resetGame = function () {
  document.querySelector('.score').textContent = 20;
  currentScore = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.guess').value = '';
  randomNumber = secretNumber();
  console.log(randomNumber);
};

// Listen for specific events(what to listen for, function to run if event activated)

// When user enters number, call function to validate value
document.querySelector('.check').addEventListener('click', userGuess);

// When user clicks "again" button, select a new random number and reset currentScore
document.querySelector('.again').addEventListener('click', resetGame);
