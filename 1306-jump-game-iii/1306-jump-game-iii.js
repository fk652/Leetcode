/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

// recursive memoization approach
// check whether jumping backwards or forwards will lead to a 0 spot
// initialize memo[start] = false to handle infinite cycles back to the same spot
// updated to true if either backwards or forwards path returns true
var canReach = function(arr, start, memo={}) {
    if (start in memo) return memo[start];
    if (start < 0 || start >= arr.length) return false;
    if (arr[start] === 0) return true;

    memo[start] = false;
    memo[start] = canReach(arr, start - arr[start], memo) ||
                  canReach(arr, start + arr[start], memo);
    return memo[start];
};

// bfs approach
// treat the array like a map since each spot can only go to 2 other spots
// need a visited set to prevent cycles
// return true early once any 0 spot is found
// return false in the end if no spot was ever found
// var canReach = function(arr, start) {
//     const visited = new Set([start]);
//     const queue = [start];

//     while (queue.length) {
//         const spot = queue.shift();
//         if (arr[spot] === 0) return true;

//         const neighbors = [spot - arr[spot], spot + arr[spot]];
//         for (const n of neighbors) {
//             if (!visited.has(n)) {
//                 visited.add(n);
//                 queue.push(n);
//             }
//         }
//     }

//     return false;
// }