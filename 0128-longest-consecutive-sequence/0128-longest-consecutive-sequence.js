/**
 * @param {number[]} nums
 * @return {number}
 */

// turn nums into a set to remove duplicates and keep track of all nums
// then numbers that's highest in a sequence (meaning n+1 isn't in the set)
// and count down the consecutive sequence to the lowest number
// while keeping track of a max sequence count
// opposite also works, counting from the lowest (when n-1 isn't in the set)

// O(n) runtime since each number is counted in a sequence only once
// because we only count down when the end of a sequence is found

var longestConsecutive = function(nums) {
    const numSet = new Set(nums);

    let max = 0;
    for (const num of numSet) {
        if (numSet.has(num+1)) continue;

        let n = num - 1;
        let count = 1;
        while (numSet.has(n)) {
            count++;
            n--;
        }
        max = Math.max(count, max);
    }
    return max;
};