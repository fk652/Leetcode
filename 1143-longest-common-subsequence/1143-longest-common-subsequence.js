/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// dp approach keeping track of current and previous rows, to save space
// O(n*m) approach going through each combo of substring pairs from end to start
// using i and j to keep track of current index of text1 and text2, respectively
// only needs to keep track of text2 compared to text1, so dp row length = text2.length
var longestCommonSubsequence = function(text1, text2) {
    let prev = Array(text2.length + 1).fill(0);
    let curr = Array(text2.length + 1).fill(0);

    for (let i = text1.length - 1; i >= 0; i--) {
        for (let j = text2.length - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                curr[j] = 1 + prev[j + 1];
            } else {
                curr[j] = Math.max(curr[j + 1], prev[j]);
            }
        }

        prev = [...curr];
    }


    return curr[0];
};