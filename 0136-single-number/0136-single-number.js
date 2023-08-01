/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let x = 0;
    
    for (const num of nums) {
        x ^= num;
    }
    
    return x;
};