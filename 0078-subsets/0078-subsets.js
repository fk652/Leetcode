/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [[]];
    
    for (const num of nums) {
        let j = result.length;
        for (let i = 0; i < j; i++) {
            result.push([...result[i], num])
        }
    }
    
    return result;
};