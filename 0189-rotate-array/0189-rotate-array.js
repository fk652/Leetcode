/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// reduce unnecessary shifts if k > nums.length
// remainder of k % nums.length is the final rotation length

// rotate one by one by moving last number to front
// var rotate = function(nums, k) {
//     k %= nums.length;
//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop());
//     }
//     return nums;
// };

// rotate all at once by moving whole slice of rotated numbers to the front
var rotate = function(nums, k) {
    k %= nums.length;
    nums.unshift(...nums.splice(nums.length - k));
    return nums;
};