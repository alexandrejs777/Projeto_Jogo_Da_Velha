document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);

    });

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;


    if (handleMove(position)) {

        setTimeout(() => {

            let resultMessage = alert('O jogo acabou! O vencedor foi o jogador nº ' + playerTurn);

            if (symbols[playerTurn - 1] == 'o') {
                resultMessage;
                oScore++;
                updateScore();
                resetGame();
            }
            else {
                resultMessage;
                xScore++;
                updateScore();
                resetGame();
            }

        }, 100);
    }

    if (drawGame()) {
        setTimeout(() => {
            alert('O jogo encerrou com empate!');
            resetGame();
        }, 100);
    }

    updateSquare(position);
}

function updateScore() {
    let oPlayer = document.getElementById("oPlayer");
    let xPlayer = document.getElementById("xPlayer");
    oPlayer.innerText = oScore;
    xPlayer.innerText = xScore;
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());

    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function resetGame() {
    board.fill('');
    playerTurn = 1;
    gameOver = false;

    for (let position = 0; position < board.length; position++) {
        updateSquare(position);
    }
}

function restartScore() {
    playerTurn = 1;
    oScore = 0;
    xScore = 0;
    oPlayer.innerText = oScore;
    xPlayer.innerText = xScore;
}