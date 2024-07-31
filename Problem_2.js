
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let dirs = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let visited = new Array(board.length).fill(false).map(() => new Array(board[0].length).fill(false));

    const wordSearchDfs = (board, word, row, col) => {
        // base cases
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || visited[row][col])
            return false

        // recursive case
        if (word.charAt(0) == board[row][col]) {
            if (word.length == 1){
                return true;
            }
            //action
            visited[row][col] = true;
            //recurse
            for (let dir of dirs) {
                let r = row + dir[0];
                let c = col + dir[1];
                if (wordSearchDfs(board, word.substr(1), r, c)){
                    return true;
                }
            }
            // backtrack
            visited[row][col] = false;
        }

        return false;

    }

    //Run DFS on each of the cell that starts with the given string's first char and then see if we find possible complete str in any of them
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (wordSearchDfs(board, word, i, j)) return true;
        }
    }

    return false;
};