/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// can use 3 pointers for i, j, k
// for each i find a j,k pair where nums[i] + nums[j] + nums[k] === 0, and i < j < k
// should also sort the nums arr from least to greatest
// this helps find a j,k pair faster when comparing nums[i] + nums[j] + nums[k] <=> 0
// if nums[i] + nums[j] + nums[k] < 0, then increase j to get a bigger number
// if nums[i] + nums[j] + nums[k] > 0, then decrease k to get a smaller number
// if nums[i] + nums[j] + nums[k] === 0, then decrease k and increase j

// to avoid duplicate triplets, increment i when same as i-1
// also whenever nums[i] + nums[j] + nums[k] === 0,
// keep incrementing/decrementing j/k while same as previous

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) continue;
        
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                
                j++;
                while (j < k && nums[j] === nums[j-1]) j++;
                
                k--;
                while (j < k && nums[k] === nums[k+1]) k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    
    return result;
};