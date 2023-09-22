/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    
    // loop through all the bits and count the 1s
    // bit at num[i] = (num >> i) & 1
    for (let i = 0; i < 32; i++) {
        const bit = (n >> i) & 1;
        if (bit === 1) count++;
    }
    
    return count;
};