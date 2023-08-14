/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rowMap = {};
    for (const row of grid) {
        row in rowMap ? rowMap[row]++ : rowMap[row] = 1;
    }
    
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        const col = grid.map(row => row[i]);
        count += rowMap[col] || 0;
    }
    
    return count;
};