// Doge Vs Shiba Game

// Set up game variables
var score = 0;
var time = 60;
var dogePosition = 0;
var shibaPosition = 0;

// Get elements from the DOM
var scoreEl = document.getElementById("score");
var timeEl = document.getElementById("time");
var dogeEl = document.getElementById("doge");
var shibaEl = document.getElementById("shiba");
var startBtn = document.getElementById("start-btn");

// Start game function
function startGame() {
  // Reset game variables
  score = 0;
  time = 60;
  dogePosition = 0;
  shibaPosition = 0;

  // Update score and time elements
  scoreEl.innerText = score;
  timeEl.innerText = time;

  // Hide start button
  startBtn.style.display = "none";

  // Start game loop
  var gameLoop = setInterval(function() {
    // Update time
    time--;
    timeEl.innerText = time;

    // Move doge and shiba randomly
    dogePosition += Math.floor(Math.random() * 5) + 1;
    shibaPosition += Math.floor(Math.random() * 5) + 1;

    // Update doge and shiba positions
    dogeEl.style.left = dogePosition + "px";
    shibaEl.style.left = shibaPosition + "px";

    // Check for collision
    if (Math.abs(dogePosition - shibaPosition) < 50) {
      score++;
      scoreEl.innerText = score;
    }

    // Check for end of game
    if (time <= 0) {
      clearInterval(gameLoop);
      endGame();
    }
  }, 1000);
}

// End game function
function endGame() {
  // Show start button
  startBtn.style.display = "block";

  // Alert final score
  alert("Game over! Your score is " + score);
}

// Add event listener to start button
startBtn.addEventListener("click", startGame);
