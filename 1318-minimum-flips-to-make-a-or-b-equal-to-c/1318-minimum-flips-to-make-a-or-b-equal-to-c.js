/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let flips = 0;

    // go through each of the 32 bits of a,b,c
    // from rightmost to leftmost bit
    // note that 0s are added on if the actual bit size is < 32
    // but 32 bit integer is the max size in this problem
    for (let i = 0; i < 32; i++) {
        // getting the bit at position i
        // uses the right shift (>>) operator and bitwise AND (&) operator
        const bitA = (a >> i) & 1;
        const bitB = (b >> i) & 1;
        const bitC = (c >> i) & 1;

        // if bitC = 1, add one flip if both bitA and bitB is 0
        // else if bitC = 0, add one flip each if bitA or bitB is 1
        if (bitC === 1) {
            if (bitA === 0 && bitB === 0) flips++;
            
            // same as above since true/false converts to 1/0
            // flips += (bitA === 0 && bitB === 0);
        } else {
            if (bitA === 1) flips++;
            if (bitB === 1) flips++;
            
            // same as above since true/false converts to 1/0
            // flips += (bitA === 1) + (bitB === 1);
        }
    }
    
    return flips;
};