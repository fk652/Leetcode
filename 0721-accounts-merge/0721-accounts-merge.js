/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const graph = buildGraph(accounts);
    
    const visited = new Set();
    const result = [];
    
    for (let i = 0; i < accounts.length; i++) {
        if (!visited.has(i)) {
            result.push(bfsHelper(i, accounts, graph, visited));
        }
    }
    
    return result;
};

var buildGraph = function(edges) {
    const graph = {};
    
    for (let j = 0; j < edges.length; j++) {
        graph[j] = [];
        const account = edges[j];
        
        for (let i = 1; i < account.length; i++) {
            if (account[i] in graph) {
                graph[account[i]].push(j);
            } else {
                graph[account[i]] = [j];
            }
            
            graph[j].push(account[i]);
        }
    }
    
    return graph;
}

var bfsHelper = function(i, accounts, graph, visited) {
    const result = [];
    const queue = [[i, "index"]];
    visited.add(i);
    
    while (queue.length) {
        const [elem, type] = queue.shift();
        
        for (const neighbor of graph[elem]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);

                if (type === "email") {
                    queue.push([neighbor, "index"])
                } else {
                    result.push(neighbor);
                    queue.push([neighbor, "email"])
                }
            }
        }
    }
    
    result.sort();
    result.unshift(accounts[i][0]);
    
    return result;
}

