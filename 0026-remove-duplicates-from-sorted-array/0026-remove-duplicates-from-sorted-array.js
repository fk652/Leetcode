/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //involves swapping numbers making the first k numbers all unique
    let i = 0;
    
    for (let j = 0; j <= nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i;
};

// var removeDuplicates = function(nums) {
//     // starting from 2nd number
//     let count = 1;
//     let i = 1;
    
//     // remove if same as previous number
//     // otherwise move on and increment unique counter and i
//     // don't need to increment i on removal since the next number moves down to nums[i]
//     while (i < nums.length) {
//         if (nums[i] === nums[i-1]) {
//             nums.splice(i, 1);
//         } else {
//             count++;
//             i++;
//         }
//     }
    
//     return count;
// };