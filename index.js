let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function handleMove(index) {
    if (!gameBoard[index]) {
        gameBoard[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;
        if (checkWin(currentPlayer)) {
            document.getElementById('status').innerText = `${currentPlayer} wins!`;
        } else if (gameBoard.every(cell => cell !== '')) {
            document.getElementById('status').innerText = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    return winPatterns.some(pattern => pattern.every(index => gameBoard[index] === player));
}

function resetBoard() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('status').innerText = '';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
s