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

        // go over normal graph edges first to get edges leading to node 0
        // e.g all neighbors in graph[0] are nodes that lead directly to 0
        // so all other edges branching out from there also lead to node 0
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }

        // any inverted edges leading to unvisited nodes are the ones to be reordered
        for (const neighbor of invertedGraph[node]) {
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
    
    // connection means A leads to B, meaning A is a neighbor of B
    for (const [a, b] of connections) {
        graph[b].push(a);
        inverted[a].push(b);
    }
    
    return [graph, inverted];
}


