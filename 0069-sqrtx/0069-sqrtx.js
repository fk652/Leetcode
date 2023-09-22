/**
 * @param {number} x
 * @return {number}
 */

// cheese method by using the built in sqrt function
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};

// brute force by checking squares of numbers < x
// the square is at most x / 2
// Math.ceil(x / 2) to handle x = 1
// var mySqrt = function(x) {
//     let root = 0;
    
//     for (let i = 0; i <= Math.ceil(x / 2); i++) {
//         if (i * i > x) break;
//         root = i;
//     }
    
//     return root;
// };