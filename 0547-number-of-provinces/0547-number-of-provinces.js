/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let total = 0;
    const visited = new Set();
    
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected[0].length; j++) {
            if (isConnected[i][j] === 1 && !visited.has(i)) {
                exploreProvince(isConnected, visited, i);
                total++;
            }
        }
    }
    
    return total;
};

var exploreProvince = function(isConnected, visited, i) {
    const stack = [i];
    visited.add(i);
    
    while (stack.length) {
        const current = stack.pop();
        
        for (let neighbor = 0; neighbor < isConnected[0].length; neighbor++) {
            if (isConnected[current][neighbor] === 1 && !visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor);
            }
        }
    }
}