/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const countHash = {};
    let pairs = 0;
    
    for (const num of nums) {
        const complement = k - num;
        if (complement in countHash && countHash[complement] > 0) {
            pairs++;
            countHash[complement]--;
        } else {
            num in countHash ? countHash[num]++ : countHash[num] = 1;
        }
    }
    
    return pairs;
};