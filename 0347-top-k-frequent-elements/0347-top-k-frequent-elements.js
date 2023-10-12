/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// count up each number using a count hash
// sort the nums by their counts in decreasing order
// and return the first k nums
var topKFrequent = function(nums, k) {
    const counts = {};
    for (const num of nums) {
        num in counts ? counts[num]++ : counts[num] = 1;
    }

    return Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, k);
};