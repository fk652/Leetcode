/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    const result = [[], []];
    
    for (let val of set1.keys()) {
        if (!set2.has(val)) result[0].push(val);
    }
    
    for (let val of set2.keys()) {
        if (!set1.has(val)) result[1].push(val);
    }
    
    return result;
};