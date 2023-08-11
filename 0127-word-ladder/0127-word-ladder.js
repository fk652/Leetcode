/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const queue = [[beginWord, 1]];
    const visited = new Set([beginWord]);
    
    while (queue.length) {
        const [word, distance] = queue.shift();
        if (word === endWord) return distance;
        
        for (const wordI of wordList) {
            if (validSequence(wordI, word) && !visited.has(wordI)) {
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