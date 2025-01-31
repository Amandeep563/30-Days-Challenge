let currMoleTile;
let currPiranTile;
let score = 0;
let gameOver = false;
let timeLeft = 30;
let timer;
let timerStarted = false; // ✅ Added: Prevent multiple timers

window.onload = function () {
  setGame();
};

function startTimer() {
  if (!timerStarted) {
    //  Ensures timer starts only once
    timerStarted = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("timer").innerText = `Time: ${timeLeft}`;
      } else {
        endGame(); // Call `endGame()` when time reaches 0
      }
    }, 1000);
  }
}

function endGame() {
  clearInterval(timer); // Stop the timer when the game is over
  gameOver = true;
  document.getElementById("score").textContent = `GAME OVER ${score}`;
}

// Setup game board
function setGame() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectedTiles);
    document.getElementById("board").appendChild(tile);
  }
  setInterval(setMole, 1000);
  setInterval(setPlant, 2000);
}

function getRandomTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) return;

  if (currMoleTile) {
    currMoleTile.innerHTML = ""; //Clear previous mole
  }

  let mole = document.createElement("img");
  mole.src = "assets/monty-mole.png";
  mole.classList.add("mole"); // Assign class for easy styling

  let num = getRandomTile();
  if (currPiranTile && currPiranTile.id == num) return; // Prevent overlap

  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) return;

  if (currPiranTile) {
    currPiranTile.innerHTML = ""; //  Clear previous plant
  }

  let plant = document.createElement("img");
  plant.src = "assets/piranha-plant.png";
  plant.classList.add("piranha"); // Assign class for easy styling

  let num = getRandomTile();
  if (currMoleTile && currMoleTile.id == num) return; // Prevent overlap

  currPiranTile = document.getElementById(num);
  currPiranTile.appendChild(plant);
}

function selectedTiles() {
  if (gameOver) return;
  startTimer(); // Start timer only when a tile is clicked

  if (this === currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
    currMoleTile.innerHTML = ""; // Remove mole immediately
    currMoleTile = null; // Reset mole tile so it can't be clicked twice
  } else if (this === currPiranTile) {
    endGame(); //Clicking plant ends the game immediately
  }
}
