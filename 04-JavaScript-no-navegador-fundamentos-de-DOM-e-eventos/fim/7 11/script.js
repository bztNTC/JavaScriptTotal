"use strict";

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");
const player1Partial = document.getElementById("player1-partial");
const player2Partial = document.getElementById("player2-partial");
const rollButton = document.getElementById("roll-button");
const resetButton = document.getElementById("reset-button");
const turnText = document.getElementById("turn-text");

let player1Total = 0;
let player2Total = 0;
let currentPlayer = 1;

function resetGame() {
  player1Total = 0;
  player2Total = 0;
  currentPlayer = 1;
  player1Score.textContent = 0;
  player1Partial.textContent = 0;
  player2Score.textContent = 0;
  player2Partial.textContent = 0;
  turnText.textContent = "Turno do jogador 1";
  rollButton.disabled = false;
  turnText.style.color = "black";
  dice1.src = "dice-1.png";
  dice2.src = "dice-1.png";
  rollButton.style.visibility = "initial";
}

rollButton.addEventListener("click", () => {
  console.log("iniciando o serteio");
  const roll1 = Math.floor(Math.random() * 6) + 1;
  const roll2 = Math.floor(Math.random() * 6) + 1;
  const sum = roll1 + roll2;
  dice1.src = "dice-" + roll1 + ".png";
  dice2.src = "dice-" + roll2 + ".png";

  if (currentPlayer === 1) {
    turnText.textContent = "Turno do jogador 1";
    player1Total += sum;
    player1Score.textContent = player1Total;
    player1Partial.textContent = sum;

    if (sum === 7 || sum === 11) {
      turnText.textContent = "Jogador 1 Perdeu!";
      turnText.style.color = "red";
      rollButton.style.visibility = "hidden";
    } else {
      currentPlayer = 2;
    }
  } else {
    turnText.textContent = "Turno do jogador 2";
    player2Total += sum;
    player2Score.textContent = player2Total;
    player2Partial.textContent = sum;

    if (sum === 7 || sum === 11) {
      turnText.textContent = "Jogador 2 Perdeu!";
      turnText.style.color = "red";
      rollButton.style.visibility = "hidden";
    } else {
      currentPlayer = 1;
    }
  }
});

resetButton.addEventListener("click", resetGame);

// Inicializa o jogo
resetGame();
