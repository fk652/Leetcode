/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let memo = {};
    const startZero = climbingHelper(cost, 0, memo);
    const startOne = climbingHelper(cost, 1, memo);
    return Math.min(startZero, startOne);
};

var climbingHelper = function(cost, i, memo) {
    if (i in memo) return memo[i];
    
    if (i >= cost.length) return 0;
    
    const oneStep = climbingHelper(cost, i+1, memo);
    const twoStep = climbingHelper(cost, i+2, memo);
    
    memo[i] = cost[i] + Math.min(oneStep, twoStep);
    return memo[i];
}