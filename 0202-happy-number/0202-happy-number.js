/**
 * @param {number} n
 * @return {boolean}
 */

// use a squareSum helper function
// keep track of seen numbers in a set, to check for endless cycles
// only returns false if a cycle is found
// keeps going until sum = 1, never goes <= 0
var isHappy = function(n) {
    const seen = new Set([n]);
    
    while (n !== 1) {
        const sum = squareSum(n);
        if (seen.has(sum)) return false;

        seen.add(sum);
        n = sum;
    }
    
    return true;
};

// sums up the squares of the digits of a num
// goes from the right to left digit by % and / by 10, until num becomes 0
var squareSum = function(num) {
    let sum = 0;
    
    while (num !== 0) {
        sum += (num % 10) ** 2;
        num = Math.floor(num/10);
    }
    
    return sum;
}