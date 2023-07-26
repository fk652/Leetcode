/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const visited = new Set();
    const stack = [[0, 0, "right"]];
    const result = [];
    
    while (stack.length) {
        const [i, j, direction] = stack.shift();
        result.push(matrix[i][j]);
        visited.add(`${i} ${j}`);
        
        if (direction === "right") {
            if (!visited.has(`${i} ${j+1}`) && j + 1 < matrix[0].length) {
                stack.push([i, j+1, "right"]);
            } else if (!visited.has(`${i+1} ${j}`) && i + 1 < matrix.length) {
                stack.push([i+1, j, "down"]);
            }
        } else if (direction === "down") {
            if (!visited.has(`${i+1} ${j}`) && i + 1 < matrix.length) {
                stack.push([i+1, j, "down"]);
            } else if (!visited.has(`${i} ${j-1}`) && j - 1 >= 0) {
                stack.push([i, j-1, "left"]);
            }
        } else if (direction === "left") {
            if (!visited.has(`${i} ${j-1}`) && j - 1 >= 0) {
                stack.push([i, j-1, "left"]);
            } else if (!visited.has(`${i-1} ${j}`) && i - 1 >= 0) {
                stack.push([i-1, j, "up"]);
            }
        } else if (direction === "up") {
            if (!visited.has(`${i-1} ${j}`) && i - 1 >= 0) {
                stack.push([i-1, j, "up"]);
            } else if (!visited.has(`${i} ${j+1}`) && j + 1 < matrix[0].length) {
                stack.push([i, j+1, "right"]);
            }
        }
    }
    
    return result;
};