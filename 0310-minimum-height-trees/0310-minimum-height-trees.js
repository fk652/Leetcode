/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (!edges.length) return [0];
    
    const graph = buildGraph(n, edges);
    
    while (Object.values(graph).length > 2) {
        const leafNodes = [];
        for (const i in graph) {
            if (graph[i].size === 1) {
                leafNodes.push(i);
            }
        }
        
        for (const leaf of leafNodes) {
            const j = graph[leaf].values().next().value;
            graph[j].delete(leaf);
            delete graph[leaf];
        }
    }
        
    return Object.keys(graph);
};

var buildGraph = function(n, edges) {
    const graph = {};
    
    for (const [i, j] of edges) {
        i in graph ? graph[i].add(String(j)) : graph[i] = new Set([String(j)]);
        j in graph ? graph[j].add(String(i)) : graph[j] = new Set([String(i)]);
    }
    
    return graph;
}