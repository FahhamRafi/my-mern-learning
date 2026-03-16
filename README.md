# 🎯 Number Guessing Game

A fun and interactive number guessing game built with vanilla JavaScript! Challenge yourself to guess the secret number between 1 and 100 with real-time feedback, track your attempts, and beat your personal high score that persists across sessions.

![Game Screenshot](https://via.placeholder.com/600x300?text=Number+Guessing+Game) <!-- Replace with actual screenshot -->

## ✨ Key Features

- **Real-Time Feedback** 🎉: Get instant feedback on your guesses - "Too High!", "Too Low!", or "Congratulations!" when you win.
- **High Score Tracking** 🏆: Your best score (fewest attempts) is saved using localStorage and persists even after refreshing or closing the browser.
- **Guess History** 📜: See all your previous guesses in a neat list to help strategize your next move.
- **Clean UI** 🎨: Simple, beginner-friendly design with a light theme, centered layout, and responsive elements.
- **Easy Reset** 🔄: Start a new game anytime with the "New Game" button.

## 🛠️ Technologies Used

- **HTML5** 📄: Structured the game's layout and elements.
- **CSS3** 🎨: Styled the interface for a clean, modern look with hover effects and responsive design.
- **JavaScript (Vanilla)** ⚡: Handled all game logic, DOM manipulation, and localStorage for high scores.

## 📚 What I Learned

This project was a great opportunity to deepen my understanding of front-end development fundamentals:

- **DOM Manipulation** 🖱️: Dynamically updating HTML elements (messages, counters, history) based on user interactions using `getElementById` and event listeners.
- **State Management** 💾: Managing game state variables (random number, attempts, history) and persisting data with localStorage for the high score feature.
- **Event Handling** 🎯: Implementing click events for buttons and input validation to ensure a smooth user experience.
- **Responsive Design** 📱: Using CSS flexbox and media queries to center the game and make it accessible on different screen sizes.
- **Best Practices** ✅: Writing clean, commented code with functions for reusability and separation of concerns.

## 🎮 How to Play

1. **Start the Game** 🚀: Open `index.html` in your web browser (or serve it locally with a simple HTTP server).
2. **Make a Guess** 🔢: Enter a number between 1 and 100 in the input field and click "Guess".
3. **Get Feedback** 💬: Read the message to see if your guess is too high, too low, or correct!
4. **Track Progress** 📊: Monitor your attempts and guess history in the stats section.
5. **Beat Your Score** 🏅: Try to guess the number in fewer attempts than your current high score.
6. **New Game** 🔄: Click "New Game" to reset and try again.

## 🚀 Getting Started

1. Clone or download this repository.
2. Open `index.html` in your favorite web browser.
3. Start guessing!

For a local server (recommended for better experience):
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ for learning and fun! Feel free to fork, star, or contribute. 🚀
