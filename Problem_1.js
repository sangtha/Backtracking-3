
/**
 * @param {number} n
 * @return {string[][]}
 */

//Idea is to place a queen at one cell at a time in each row and go ahead to place other 
//queens in next rows and satisfying condition, if it does not work, then we back track and choose another cell placement for previous row
var solveNQueens = function (n) {

    let board = new Array(n).fill(-1).map(() => new Array(n).fill(-1));
    let res = [];
    console.log(board)
    const canPlaceQueen = (board, row, col, n) => {
        //Here we check the conditions for queen placement compared to previous queen placements.
        //check previous column placements in above rows
        for (let r = 0; r < row; r++) {
            if (board[r][col] == 1) {
                return false;
            }
        }

        //check previous placements in left diagonal
        let x = row - 1;
        let y = col - 1;
        while (x >= 0 && y >= 0) {
            if (board[x][y] == 1) {
                return false;
            }
            x--;
            y--;
        }

        //check previous placements in right diagonal
        x = row - 1;
        y = col + 1;
        while (x >= 0 && y < n) {
            if (board[x][y] == 1) {
                return false;
            }
            x--;
            y++;
        }

        return true;
    }
    const helperFunction = (board, row, n) => {
        //base case
        if (row === n) {
            let currRes = [];
            for (let i = 0; i < n; i++) {
                let rowStr = '';
                for (let j = 0; j < n; j++) {
                    if (board[i][j] == 1)
                        rowStr += 'Q';
                    else
                        rowStr += '.';
                }
                currRes.push(rowStr);
            }
            res.push(currRes);
            return false;
        }

        //recurive case
        for (let i = 0; i < n; i++) {
            if (canPlaceQueen(board, row, i, n)) {
                board[row][i] = 1;
                if (helperFunction(board, row + 1, n))
                    return true;
            }
            board[row][i] = 0;
        }

        return false;
    }

    helperFunction(board, 0, n)

    return res;
};