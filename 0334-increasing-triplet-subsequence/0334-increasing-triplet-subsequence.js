/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min1 = Infinity;
    let min2 = Infinity;
    
    // i, j, k always increasing order because we go through nums in order
    // min1 < min2 since we check num <= min1 first
    for (const num of nums) {
        if (num <= min1) min1 = num;
        else if (num <= min2) min2 = num;
        else return true;
    }
    
    return false;
};