const player1Dice = document.getElementById("player1-dice");
const player2Dice = document.getElementById("player2-dice");
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");
const rollButton = document.getElementById("roll-button");
const resetButton = document.getElementById("reset-button");
const winnerText = document.getElementById("winner-text");
const turnText = document.getElementById("turn-text");

let player1Total = 0;
let player2Total = 0;
let currentPlayer = 1;

// Função para converter números em notação de dado
function getDiceNotation(number) {
  const diceNotation = {
    1: "⚀",
    2: "⚁",
    3: "⚂",
    4: "⚃",
    5: "⚄",
    6: "⚅",
  };
  return diceNotation[number];
}

function resetGame() {
  player1Total = 0;
  player2Total = 0;
  currentPlayer = 1;
  player1Dice.textContent = "";
  player2Dice.textContent = "";
  player1Score.textContent = "0";
  player2Score.textContent = "0";
  turnText.textContent = "Turno do jogador 1";
  winnerText.textContent = "";
  winnerText.style.color = "";
  rollButton.disabled = false;
}

rollButton.addEventListener("click", () => {
  const roll1 = Math.floor(Math.random() * 6) + 1;
  const roll2 = Math.floor(Math.random() * 6) + 1;
  const sum = roll1 + roll2;

  if (currentPlayer === 1) {
    turnText.textContent = "Turno do jogador 1";
    player1Dice.textContent =
      getDiceNotation(roll1) + " + " + getDiceNotation(roll2) + " = " + sum;
    player1Total += sum;
    player1Score.textContent = player1Total;

    if (sum === 7 || sum === 11) {
      winnerText.textContent = "Jogador 1 Perdeu!";
      winnerText.style.color = "red";
      rollButton.disabled = true;
    } else {
      currentPlayer = 2;
    }
  } else {
    turnText.textContent = "Turno do jogador 2";
    player2Dice.textContent =
      getDiceNotation(roll1) + " + " + getDiceNotation(roll2) + " = " + sum;
    player2Total += sum;
    player2Score.textContent = player2Total;

    if (sum === 7 || sum === 11) {
      winnerText.textContent = "Jogador 2 Perdeu!";
      winnerText.style.color = "red";
      rollButton.disabled = true;
    } else {
      currentPlayer = 1;
    }
  }
});

resetButton.addEventListener("click", resetGame);

// Inicializa o jogo
resetGame();
