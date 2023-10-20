/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// basic binary search but with extra steps to handle matrix indexing [row, column]
// map the matrix indexing to a 1d array with indexing going left to right, row by row
// [ [0 1 2 3] 
//   [4 5 6 7] ]  <= e.g the 1-d index mapping for a 2x4 matrix

// to convert the 1-d index back to a 2-d index [row, column] we see this pattern:
// row = Math.floor(i / n) = the amount of times i divides into column length
// col = i % n = the remainder of i divided by column length
// where n is column length and i is the 1-d index

// so we treat low, high, and mid as the 1-d index and then convert mid into the 2d index
// which we can then use to compare target and the mid number

var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let low = 0;
    let high = (m * n) - 1;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const row = Math.floor(mid / n);
        const col = mid % n;
        
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return false;
};