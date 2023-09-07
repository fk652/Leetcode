/**
 * @param {number} n
 * @return {number}
 */
// the O(1) math trick
// remaining bulbs are in perfect square ith positions
// # perfect squares from 1 to n = sqrt(n) (rounded down)
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};

// long way that involved an array of bulbs and switching each round as instructed
// var bulbSwitch = function(n) {
//     if (n === 0) return 0;

//     const bulbs = Array(n).fill(true);
//     let count = n;

//     for (let i = 2; i <= n; i++) {
//         for (let j = i-1; j < bulbs.length; j += i) {
//             bulbs[j] ? count-- : count++;
//             bulbs[j] = !bulbs[j];
//         }
//     }

//     return count;
// };