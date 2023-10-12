/**
 * @param {number[]} nums
 * @return {boolean}
 */

// use a set to keep track of seen numbers
// if duplicate contained in set, return true
// return false if no duplicates found
var containsDuplicate = function(nums) {
    const seen = new Set();

    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }

    return false;
};

// can simplify code by making a nums set and comparing sizes
// var containsDuplicate = function(nums) {
//     const numSet = new Set(nums);
//     return numSet.size !== nums.length;
// };