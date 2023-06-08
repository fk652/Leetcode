/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = "";
    
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j >= i; j--) {
            if (j + 1 - i < longest.length) break;
            
            if (s[i] === s[j]) {
                const slice = s.slice(i, j+1);
                if (isPalindrome(slice) && slice.length > longest.length) {
                    longest = slice;
                    break;
                }
            }
        }
    }
    
    return longest;
};

const isPalindrome = (str) => {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - (i + 1)]) return false;
    }
    return true;
}