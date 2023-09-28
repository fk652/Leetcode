/**
 * @param {number[]} citations
 * @return {number}
 */

// sort citations in increasing order
// go through in order and find a citation amount >= # remaining papers,
// (total papers - current papers looked through) === h
// return 0 if no such h is found

var hIndex = function(citations) {
    citations.sort((a,b) => a - b);
    
    for (let i = 0; i < citations.length; i++) {
        if (citations.length - i <= citations[i]) {
            return citations.length - i;
        }
    }
    
    return 0;
};