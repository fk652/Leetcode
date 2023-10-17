/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// use two pointers i/j from the start/end of the array
// keep incrementing or decremnting j until i < j
// take advantage of the fact that numbers is sorted in increasing order
// if nums[i] + nums[j] < target, increment i to get a bigger number
// if nums[i] + nums[j] > target, decrement j to get a smaller number
// if nums[i] + nums[j] === target, return the answer [i+1, j+1]
// remember to add 1 to i and j because the array is supposed to be 1-indexed

var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length-1;
    
    while (i < j) {
        const sum = numbers[i] + numbers[j];
        if (sum === target) {
            return [i+1, j+1];
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
    
    // guaranteed a solution so no default return needed
};