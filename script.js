// Variables to store game state
let randomNumber; // The number the computer is thinking of
let attempts = 0; // Number of guesses made
let guessHistory = []; // Array to store previous guesses
let highScore = null; // Best score (fewest attempts)

// Function to generate a new random number between 1 and 100
function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

// Function to load high score from localStorage
function loadHighScore() {
  const stored = localStorage.getItem("highScore");
  if (stored) {
    highScore = parseInt(stored);
  }
}

// Function to reset the game
function resetGame() {
  attempts = 0; // Reset attempts counter
  guessHistory = []; // Clear guess history
  generateRandomNumber(); // Generate a new random number
  document.getElementById("message").textContent = ""; // Clear message
  document.getElementById("attempts").textContent = attempts; // Update attempts display
  document.getElementById("history").textContent = guessHistory.join(", "); // Update history display
  document.getElementById("guessInput").value = ""; // Clear input field
  loadHighScore(); // Load high score
  document.getElementById("highScore").textContent = highScore || "N/A"; // Update high score display
}

// Function to check the user's guess
function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value); // Convert input to number

  // Check if input is valid
  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById("message").textContent =
      "Please enter a number between 1 and 100.";
    return;
  }

  attempts++; // Increment attempts
  guessHistory.push(guess); // Add guess to history

  // Compare guess to random number
  if (guess === randomNumber) {
    document.getElementById("message").textContent =
      `Congratulations! You found it in ${attempts} attempts!`;
    // Check if this is a new high score
    if (!highScore || attempts < highScore) {
      highScore = attempts;
      localStorage.setItem("highScore", highScore);
      document.getElementById("highScore").textContent = highScore;
    }
  } else if (guess < randomNumber) {
    document.getElementById("message").textContent = "Too Low! Try again.";
  } else {
    document.getElementById("message").textContent = "Too High! Try again.";
  }

  // Update displays
  document.getElementById("attempts").textContent = attempts;
  document.getElementById("history").textContent = guessHistory.join(", ");

  // Clear input for next guess
  guessInput.value = "";
}

// Event listeners
document.getElementById("guessBtn").addEventListener("click", checkGuess);
document.getElementById("newGameBtn").addEventListener("click", resetGame);

// Initialize the game when the page loads
resetGame();
