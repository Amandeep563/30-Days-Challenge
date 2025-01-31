let currMoleTile;

window.onload = function () {
  setGame();
};

function setGame() {
  // set the grid for the game board lol
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    document.getElementById("board").appendChild(tile);
  }
  setInterval(setMole, 2000); //2000 milliseconds => 2 sec
}

function getRandomTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src = "assets/monty-mole.png";

  let num = getRandomTile();
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}
