/**
 * @param {number[]} nums
 * @return {number[]}
 */

// calc the running cumulative products in forward and reverse
// result[i] = cumulativeProduct[i-1] + reverseCumulativeProduct[i+1]
// it's the same as getting the products of all numbers before and after nums[i]
// and multiplying those two products together to get product except self
// var productExceptSelf = function(nums) {
//     const n = nums.length;
//     const cumProd = [nums[0]];
//     const revCumProd = [nums[n-1]];
//     for (let i = 1; i < n; i++) {
//         cumProd.push(nums[i] * cumProd[i-1]);
//         revCumProd.push(nums[n-1-i] * revCumProd[i-1]);
//     }
//     revCumProd.reverse();
    
//     const results = [];
//     for (let i = 0; i < n; i++) {
//         if (i === 0) results.push(revCumProd[i+1]);
//         else if (i === n - 1) results.push(cumProd[i-1]);
//         else results.push(cumProd[i-1] * revCumProd[i+1]);
//     }
//     return results;
// };

// version without reversing revCumProd
// note that doing revCumProd.unshift instead is worse than .push
// since unshift is an O(n) operation in JavaScript while push is O(1)
// so we have to index at revCumProd[n-2-i] instead of revCumProd[i+1]
var productExceptSelf = function(nums) {
    const n = nums.length;
    const cumProd = [nums[0]];
    const revCumProd = [nums[n-1]];
    for (let i = 1; i < n; i++) {
        cumProd.push(nums[i] * cumProd[i-1]);
        revCumProd.push(nums[n-1-i] * revCumProd[i-1]);
    }
    
    const results = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) results.push(revCumProd[n-2-i]);
        else if (i === n - 1) results.push(cumProd[i-1]);
        else results.push(cumProd[i-1] * revCumProd[n-2-i]);
    }
    return results;
};