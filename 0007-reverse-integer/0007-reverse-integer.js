/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0;
    let copy = Math.abs(x);
    while (copy !== 0) {
        reverse = (reverse * 10) + copy % 10;
        copy = Math.floor(copy/10);
    }
    
    if (reverse < -(2**31) || reverse > (2**31) - 1) return 0;
    if (x < 0) return -reverse;
    return reverse;
};