/**
 * @param {character[][]} board
 * @return {boolean}
 */

// can use sets for each row/col/box (i/j/k) to keep track of numbers seen
// return false if repeats are found in row/col/box
// return true if no repeats were found after going through the whole grid

// box index k = (i/3) + (3 * (j/3))
// same as getting box's row index and offset by 3 * box's column index
// can also do k = (j/3) + (3 * (i/3))

// O(n^2) runtime, for going through a square grid
// but is O(1) since the grid is always 9x9

var isValidSudoku = function(board) {
    const rowSets = new Array(9).fill().map(x => new Set());
    const colSets = new Array(9).fill().map(x => new Set());
    const boxSets = new Array(9).fill().map(x => new Set());
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === '.') continue;
            
            const k = Math.floor(i / 3) + (3 * Math.floor(j / 3));
            
            if (rowSets[i].has(num) || colSets[j].has(num) || boxSets[k].has(num)) {
                return false;
            }
            
            rowSets[i].add(num);
            colSets[j].add(num);
            boxSets[k].add(num);
        }
    }
    
    return true;
};