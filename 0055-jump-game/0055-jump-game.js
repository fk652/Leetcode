/**
 * @param {number[]} nums
 * @return {boolean}
 */

// recursive memoization approach
// var canJump = function(nums, i = 0, memo = {}) {
//     if (i in memo) return memo[i];
//     if (i >= nums.length - 1) return true;
//     if (nums[i] === 0) return false;
    
//     let found = false;
//     for (let j = nums[i]; j > 0; j--) {
//         found = canJump(nums, i + j, memo);
//         if (found) break;
//     }
    
//     memo[i] = found;
//     return memo[i];
// };

// dynamic programming approach O(n^2)
// dp[i] represents whether that index is reachable
// return true if the end is ever reachable
// otherwise mark that i spot as reachable
// initialize all spots as false, and the first spot true
// var canJump = function(nums) {
//     // starter corner cases
//     if (nums.length === 1) return true;
//     if (nums[0] === 0) return false;

//     const dp = Array(nums.length).fill(false);
//     dp[0] = true;

//     for (let i = 0; i < nums.length; i++) {
//         if (!dp[i]) return false;

//         for (let j = nums[i]; j > 0; j--) {
//             if (i + j >= nums.length -1) return true;
//             dp[i + j] = true;
//         }
//     }

//     return false;
// }

// O(n) solution by back tracing spots to jump from
// update last spot when current spot + spot's jump distance (i + nums[i]),
// can reach current last spot
// check if last spot made to the start
// var canJump = function(nums) {
//     let lastSpot = nums.length-1;

//     for (let i = nums.length-2; i >= 0; i--) {
//         if (i + nums[i] >= lastSpot) lastSpot = i;
//     }

//     return lastSpot === 0;
// }

// O(n) solution by climbing each index
// keeping track of highest reachable spot at that current time
// if current spot is ever out of reach, then the end isn't reachable
// otherwise return true after climbing to the end
var canJump = function(nums) {
    let highestReachable = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i > highestReachable) return false;
        highestReachable = Math.max(highestReachable, i + nums[i]);
    }

    return true;
}