/**
 * @param {string} s
 * @return {boolean}
 */
// use two pointers at the start and end of s
// keep incrementing/decrementing i/j until the two pointers reach the middle
// return false if s[i] !== s[j] (invalid palindrome)

// also need to handle upper/lowercase and non-alphanumeric characters
// so first convert the whole s to lowercase
// and replace non a-z/0-9 characters with '' (removing all non-alphanumeric chaarcters)

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let i = 0;
    let j = s.length-1;
    
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    
    return true;
};