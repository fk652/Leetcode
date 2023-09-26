/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// Can tell there is an answer by checking if sum(gas) > sum(cost)
// Can optimize to an O(n) solution by summing up net totals,
// and keeping track of a current total
// Whenever current total drops below 0, update answer to the i+1 station

// This works because if final total (sum(gas) - sum(cost)) > 0,
// we are guaranteed a unique solution
// Then the first station that ends with a positive running cost to the array end,
// will also stay positive when tracking back around to it

// Because we always do gas[i] - cost[i] instead of gas[i] - cost[i-1],
// the i+1 station is guaranteed to offset that negative total,
// if it's running total to the array end is positive

var canCompleteCircuit = function(gas, cost) {
    let result = 0;
    let currTotal = 0;
    let finalTotal = 0;
    
    for (let i = 0; i < gas.length; i++) {
        currTotal += gas[i] - cost[i];
        finalTotal += gas[i] - cost[i];
        
        if (currTotal < 0) {
            currTotal = 0;
            result = i+1;
        }
    }
    
    if (finalTotal < 0) return -1;
    return result;
};