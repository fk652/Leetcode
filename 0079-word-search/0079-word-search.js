/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (!board.length || !board[0].length || !word.length) return false;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const visited = new Set();
            const found = dfs(board, i, j, word, 0, visited);
            if (found) return true;
        }
    }
    return false;
};

function dfs(board, i, j, word, count, visited) {
    if (count === word.length) return true;
    
    if (i < 0 || i >= board.length ||
        j < 0 || j >= board[0].length ||
        visited.has(`${i}, ${j}`) ||
        board[i][j] !== word[count]
    ) return false;
    
    visited.add(`${i}, ${j}`);
    count++;
    
    for (const [x, y] of [[i+1, j], [i-1, j], [i, j+1], [i, j-1]]) {
        const result = dfs(board, x, y, word, count, visited);
        if (result) return true;
    }
    
    visited.delete(`${i}, ${j}`)
    return false;
}