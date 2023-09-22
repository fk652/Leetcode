/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// another solution by doing a bit conversion on the number
// keep dividing by 2 until n reaches 0
// add up the number of 1 remainders
// var hammingWeight = function(n) {
//     let count = 0;
    
//     while (n > 0) {
//         if (n % 2 === 1) count++;
//         n = Math.floor(n/2);
//     }
    
//     return count;
// };

// the int/input has 32 bits
// loop through all the 32 bits and count the 1s
// bit at num[i] = (num >> i) & 1
var hammingWeight = function(n) {
    let count = 0;
    
    for (let i = 0; i < 32; i++) {
        const bit = (n >> i) & 1;
        if (bit === 1) count++;
    }
    
    return count;
};