// Read these comments and PREDICT what will appear in #out before you run it.
// Then run it and compare your prediction.

const out = document.getElementById("out");

// We will build a string line by line.
let msg = "";

// 1) Add "Start" and a newline
msg += "Start\n";

// 2) Make a counter and increase it twice
let c = 0;
c = c + 1;
c = c + 1;

// 3) Add the current value of c
msg += "Counter is " + c + "\n";

// 4) If c is 2, add "OK"
if (c === 2) {
  msg += "OK\n";
}

// 5) Show the final message
out.textContent = msg;
