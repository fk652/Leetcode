/**
 * @param {number[]} nums
 * @return {number}
 */

// Modify jump game I O(n) solution to count min jumps,
// by keeping track of the next best spot to jump from.

// Increment jump count whenever the next jump spot is passed,
// and also update next jump spot to the current highest reachable spot.

// Always update the current highest reachable spot, 
// whenever current spot + jump distance is better.

var jump = function(nums) {
    let nextJumpSpot = 0;
    let highestReachable = 0;
    let jumps = 0;

    for (let i = 0; i < nums.length; i++) {
        // This problem guarantees the end is reachable, so no need for this check.
        // if (i > highestReachable) return -1;

        if (i > nextJumpSpot) {
            nextJumpSpot = highestReachable;
            jumps++;
        }

        highestReachable = Math.max(highestReachable, i + nums[i]);
    }

    return jumps;
};