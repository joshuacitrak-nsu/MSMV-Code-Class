// INSTRUCTIONS: Fix the WRONG comments so they describe the code accurately.
// You do NOT need to change the code (but you can if you spot a real bug).

let total = 0; // TODO: This comment is wrong. Describe what "total" is for.

// When the page loads, remove the button from the page.  <-- wrong on purpose
const addBtn = document.getElementById("add");

// This function subtracts 5 from total.  <-- wrong on purpose
function addOne() {
  total = total + 1;
  document.getElementById("count").textContent = total;
}

// When the user double-clicks, run addOne.  <-- wrong on purpose
addBtn.addEventListener("click", addOne);
