/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const visited = {};
    return countPaths(m, n, 0, 0, visited);
};

var countPaths = function(m, n, i, j, visited) {
    const key = `${i} ${j}`;
    if (key in visited) return visited[key];
    
    if (i >= m || j >= n) return 0;
    if (i === m - 1 && j === n - 1) return 1;
    
    const down = countPaths(m, n, i+1, j, visited);
    const right = countPaths(m, n, i, j+1, visited);
    
    visited[key] = down + right;
    return visited[key];
}