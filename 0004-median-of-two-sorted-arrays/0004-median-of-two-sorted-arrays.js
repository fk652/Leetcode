/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = merge(nums1, nums2);
    
    const i = Math.floor(merged.length / 2)
    if (merged.length % 2 === 0) {
        return (merged[i] + merged[i-1])/2
    } else {
        return merged[i];
    }
};

const merge = (nums1, nums2) => {
    let result = [];
    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            result.push(nums1.shift());
        } else {
            result.push(nums2.shift());
        }
    }
    
    if (nums1.length) result = result.concat(nums1);
    else if (nums2.length) result = result.concat(nums2);
    
    return result;
}