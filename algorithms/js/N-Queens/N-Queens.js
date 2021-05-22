/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    const ans = [];
    
    const board = Array.from({length: n}, x => new Array(n).fill('.'));
    
    const addToResult = (board) => {            // transform matrix to array for return;
        const list = [];
        for (let i = 0; i < board.length; i++) {
            let str = "";
            for (let j = 0; j < board.length; j++) {
                str += board[i][j];
            }
            list.push(str);
        }
        ans.push(list);
    }
    
    const isSafe = (board, row, col) => {
        // checking up and down
        for (let i = 0; i < board.length; i++) {
            if (board[i][col] === 'Q' && i !== row) return false;
        }
        
        // check left diagonal up
        let i = row - 1, j = col - 1;
        while (i >= 0 && j >= 0) {
            if (board[i][j] === 'Q') return false;
            i--, j--;
        }
        
        // check left diagonal down
        i = row + 1, j = col - 1;
        while (i < board.length && j >= 0) {
            if (board[i][j] === 'Q') return false;
            i++, j--;
        }
        
        // check right diagonal up
        i = row - 1, j = col + 1;
        while (i >= 0 && j < board[0].length) {
            if (board[i][j] === 'Q') return false;
            i--, j++;
        }
        
        // check right diagonal down
        i = row + 1, j = col + 1;
        while (i < board.length && j < board[0].length) {
            if (board[i][j] === 'Q') return false;
            i++, j++;
        }
        
        return true;
        
    }
    
    const solve = (board, row) => {
        if (row >= board.length) {
            addToResult(board);
            return;
        }
        for (let i = 0; i < board.length; i++) {
            if (isSafe(board, row, i)) {
                board[row][i] = 'Q';
                solve(board, row + 1);
                board[row][i] = '.';
            }
        }
    }
    
    solve(board, 0);
    
    return ans;    
};