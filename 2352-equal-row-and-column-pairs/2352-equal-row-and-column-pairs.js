/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rowMap = {};
    for (const row of grid) {
        row in rowMap ? rowMap[row]++ : rowMap[row] = 1;
    }
    
    const columns = [];
    for (let i = 0; i < grid.length; i++) columns.push([]);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            columns[j].push(grid[i][j]);
        }
    }
    
    let count = 0;
    for (const col of columns) {
        if (col in rowMap) count += rowMap[col];
    }
    
    return count;
};