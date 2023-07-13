/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (!nums.length) return [[]];
    
    const first = nums[0];
    const perms = permute(nums.slice(1));
    
    const result = [];
    for (const perm of perms) {
        for (let i = 0; i <= perm.length; i++) {
            result.push([...perm.slice(0, i), first, ...perm.slice(i)]);
        }
    }
    return result;
};