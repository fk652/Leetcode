/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // sort stones in increasing order
    stones.sort((x, y) => x - y);
    
    // smash the two heaviest stones in the end
    // add in smashed stone, if needed, and then resort
    while (stones.length > 1) {
        const smashed = Math.abs(stones.pop() - stones.pop());
        if (smashed > 0) {
            stones.push(smashed);
            stones.sort((x, y) => x - y);
        }
    };
    
    return stones.length ? stones[0] : 0;
};