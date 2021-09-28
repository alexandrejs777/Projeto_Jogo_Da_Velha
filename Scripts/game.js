// iniciar as variaveis

let board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 1;
let symbols = ['o', 'x'];
let gameOver = false;
let oScore = 0;
let xScore = 0;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTurn - 1];

        gameOver = isWin();

        if (!gameOver) {

            playerTurn = (playerTurn == 1) ? 2 : 1;

        }
    }
    return gameOver;

}

function isWin() {

    for (let i = 0; i < winStates.length; i++) {
        let sequence = winStates[i];

        let positionOne = sequence[0];
        let positionTwo = sequence[1];
        let positionThree = sequence[2];

        if (board[positionOne] == board[positionTwo] &&
            board[positionOne] == board[positionThree] && board[positionOne] != '') {

            return true;

        }

    }

    return false;
}

function drawGame(){
    for (let i = 0; i < board.length; i++) {
        if (board[i] == ''){
            return false;
        }
    }
    return true;
}