// INSTRUCTIONS: Something is wrong. Use the comments to find and fix the bug,
// then make the score go up when the button is clicked.

let score = 0; // keep track of the score

// BUG? Are we grabbing the right element IDs?
const scoreEl = document.getElementById("points");
const buttonEl = document.getElementById("plusOne");

// This function should add 1 to score and display "Score: X"
function addScore() {
  // HINT: update both the variable and the page text
  score = score + 1;
  // Is the text updating the correct element with the correct label?
  scoreEl.textContent = "Score: " + score;
}

// Does this listen for the right event on the right element?
buttonEl.addEventListener("click", addScore);
