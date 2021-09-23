// iniciar as variaveis

let board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 0;
let symbols = ['o', 'x'];

function handleMove(position) {

    if (board[position] == '') {
        board[position] = symbols[playerTurn];

        if (playerTurn == 0) {
            playerTurn = 1;
        } else {
            playerTurn = 0;
        }
    }

}