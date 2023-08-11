/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;
    
    const graph = buildGraph([...wordList, beginWord]);
    const queue = [[beginWord, 1]];
    const visited = new Set([beginWord]);
    
    while (queue.length) {
        const [word, distance] = queue.shift();
        if (word === endWord) return distance;
        
        for (const wordI of graph[word].values()) {
            if (!visited.has(wordI)) {
                visited.add(wordI);
                queue.push([wordI, distance + 1]);
            }
        }
    }
    
    return 0;
};

var validSequence = function(str1, str2) {
    let diff = 0;
    
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) diff++;
        if (diff > 1) return false;
    }
    
    return true;
}

var buildGraph = function(wordList) {
    const graph = {};

    for (let i = 0; i <= wordList.length; i++) {
        for (let j = i+1; j < wordList.length; j++) {
            if (validSequence(wordList[i], wordList[j])) {
                wordList[i] in graph ? graph[wordList[i]].add(wordList[j]) 
                                     : graph[wordList[i]] = new Set([wordList[j]]);
                wordList[j] in graph ? graph[wordList[j]].add(wordList[i]) 
                                     : graph[wordList[j]] = new Set([wordList[i]]);
            }
        }
    }

    return graph;
}