/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const [graph, invertedGraph] = buildGraphs(n, connections);
    let minChange = 0;
    let queue = [0];
    const visited = new Set([0]);
    
    while (queue.length) {
        const node = queue.shift();

        for (const neighbor of invertedGraph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
                minChange++;
            }
        }
    }
    
    return minChange;
};

var buildGraphs = function(n, connections) {
    const graph = {};
    const inverted = {};
    
    for (let i = 0; i < n; i++) {
        graph[i] = [];
        inverted[i] = [];
    }
    
    for (const [a, b] of connections) {
        graph[a].push(b);
        inverted[b].push(a);
    }
    
    return [graph, inverted];
}


