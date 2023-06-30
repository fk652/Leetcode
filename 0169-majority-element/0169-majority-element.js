/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const majority = Math.ceil(nums.length / 2);
    const numCount = {};
    
    for (const num of nums) {
        num in numCount ? numCount[num]++ : numCount[num] = 1;
        if (numCount[num] === majority) return num;
    }
};