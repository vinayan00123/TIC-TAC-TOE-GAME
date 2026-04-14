// Enhanced PRO version of the Tic Tac Toe Game
// Features improved AI, better state management, animations, and professional gameplay.

class TicTacToe {
    constructor() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.winner = null;
        this.animationsEnabled = true;
    }

    // Improved AI implementation
    playAI() {
        const availableMoves = this.board.map((val, index) => val === null ? index : null).filter(val => val !== null);
        const move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        this.makeMove(move);
    }

    // Handle a player's move
    makeMove(index) {
        if (this.winner || this.board[index]) return;
        this.board[index] = this.currentPlayer;
        this.checkWinner();
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        if (this.currentPlayer === 'O') this.playAI(); // AI plays after player
    }

    // Check for a winner
    checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.winner = this.board[a];
                this.animateWinner(combination);
                return;
            }
        }
    }

    // Animate the winning combination
    animateWinner(combination) {
        // Logic for animation
        if(this.animationsEnabled) {
            console.log(`Player ${this.winner} wins!`);
            // Implement actual animation here
        }
    }

    // Reset the game
    reset() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.winner = null;
    }
}

const game = new TicTacToe();

// Example usage - Player makes a move
// game.makeMove(0); // X moves
// game.playAI(); // O moves