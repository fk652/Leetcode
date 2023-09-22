/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// keep track of reversed bits in a string
// loop through all bits and add them in reverse order
// convert the reversed bit string to a number and return it
var reverseBits = function(n) {
    let reversed = '';
    
    for (let i = 0; i < 32; i++) {
        const bit = (n >> i) & 1;
        reversed += bit;
    }
    
    return parseInt(reversed, 2);
};