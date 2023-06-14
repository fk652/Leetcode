/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length - 1;
    
    let totalProductl = 1;
    const productsl = [];
    
    let totalProductr = 1;
    const productsr = [];
    
    for (let i = 0; i <= n; i++) {
        totalProductl *= nums[i];
        productsl.push(totalProductl);
        
        totalProductr *= nums[n - i];
        productsr.push(totalProductr);
    }
    
    const result = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) result.push(productsr[n - 1]);
        else if (i === n) result.push(productsl[n - 1]);
        else result.push(productsl[i - 1] * productsr[n - (i + 1)])
    }
    
    return result;
};