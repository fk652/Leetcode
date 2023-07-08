/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const queue = [];
    const visited = new Set();
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j, 0]);
                visited.add(`${i} ${j}`);
            }
        }
    }
    
    while (queue.length) {
        const [i, j, dist] = queue.shift();
        
        const neighbors = [[i+1, j], [i-1, j], [i, j+1], [i, j-1]];
        for (const [x, y] of neighbors) {
            if (x >= 0 && x < mat.length &&
                y >= 0 && y < mat[0].length &&
                !visited.has(`${x} ${y}`)
               ) {
                queue.push([x, y, dist+1]);
                visited.add(`${x} ${y}`);
                mat[x][y] = dist + 1;
            } 
        }
    }
    
    return mat;
};