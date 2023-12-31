const playerText = document.getElementById('playerText');
const computerText = document.getElementById('computerText');
const resultText = document.getElementById('resultText');

const choiceBtns = document.querySelectorAll('.choiceButn');
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner() {
    if (player === computer) {
        return "Draw!";
    } else if (computer === "Rock") {
        return (player === "PAPER") ? "You win" : "You lose";
    } else if (computer === "PAPER") {
        return (player === "SCISSORS") ? "You win" : "You lose";
    } else if (computer === "SCISSORS") {
        return (player === "Rock") ? "You win" : "You lose";
    }
}
