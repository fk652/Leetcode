/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = buildGraph(equations, values);
    const results = [];
    
    for (const [a, b] of queries) {
        results.push(dfsFind(graph, a, b, new Set()));
    }
    
    return results;
};

var buildGraph = function(equations, values) {
    const graph = {};
    
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        if (!(a in graph)) graph[a] = {};
        if (!(b in graph)) graph[b] = {};
        graph[a][b] = values[i];
        graph[b][a] = 1 / values[i];
    }
    
    return graph;
}

var dfsFind = function(graph, start, end, visited) {
    if (!(start in graph) || !(end in graph)) return -1;
    if (start === end) return 1;
    
    visited.add(start);
    
    for (const [neighbor, value] of Object.entries(graph[start])) {
        if (!visited.has(neighbor)) {
            const result = dfsFind(graph, neighbor, end, visited);
            
            // path to end was found
            if (result > 0) return value * result;
        }
    }
    
    // no path to end was found from current start
    return -1;
}