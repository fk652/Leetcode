/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    time = time % ((n - 1) * 2);
    
    // forward pass
    if (time < n) return time + 1;
    
    // backwards pass
    time = time % n;
    return n - (time + 1);
};