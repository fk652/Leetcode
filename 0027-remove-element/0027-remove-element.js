/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// can also use k to keep track of the last index to swap values with
// everything at index k and after will have nums = val
// everything before index k will have nums != val
// two pointer strategy
var removeElement = function(nums, val) {
    let k = nums.length;
    let i = 0;

    // swap current nums[i] with current end nums[k] if nums[i] = val
    // and decrement current end k
    // otherwise keep incrementing i 
    while (i < k) {
        if (nums[i] === val) {
            [nums[i], nums[k-1]] = [nums[k-1], nums[i]];
            k--;
        } else {
            i++;
        }
    }

    return k;
};