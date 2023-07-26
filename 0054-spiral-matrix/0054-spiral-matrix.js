/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const visited = new Set();
    const queue = [[0, 0, "right"]];
    const result = [];
    
    while (queue.length) {
        const [i, j, direction] = queue.shift();
        result.push(matrix[i][j]);
        visited.add(`${i} ${j}`);
        
        if (direction === "right") {
            if (!visited.has(`${i} ${j+1}`) && j + 1 < matrix[0].length) {
                queue.push([i, j+1, "right"]);
            } else if (!visited.has(`${i+1} ${j}`) && i + 1 < matrix.length) {
                queue.push([i+1, j, "down"]);
            }
        } else if (direction === "down") {
            if (!visited.has(`${i+1} ${j}`) && i + 1 < matrix.length) {
                queue.push([i+1, j, "down"]);
            } else if (!visited.has(`${i} ${j-1}`) && j - 1 >= 0) {
                queue.push([i, j-1, "left"]);
            }
        } else if (direction === "left") {
            if (!visited.has(`${i} ${j-1}`) && j - 1 >= 0) {
                queue.push([i, j-1, "left"]);
            } else if (!visited.has(`${i-1} ${j}`) && i - 1 >= 0) {
                queue.push([i-1, j, "up"]);
            }
        } else if (direction === "up") {
            if (!visited.has(`${i-1} ${j}`) && i - 1 >= 0) {
                queue.push([i-1, j, "up"]);
            } else if (!visited.has(`${i} ${j+1}`) && j + 1 < matrix[0].length) {
                queue.push([i, j+1, "right"]);
            }
        }
    }
    
    return result;
};