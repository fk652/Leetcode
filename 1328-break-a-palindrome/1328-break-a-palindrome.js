/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if (palindrome.length === 1) return "";
    
    for (i = 0; i < palindrome.length; i++) {
        if (palindrome[i] != "a") {
            for (j = i+1; j < palindrome.length; j++) {
                if (palindrome[j] != "a") {
                    return palindrome.slice(0, i) + "a" + palindrome.slice(i+1);
                }
            }

            return palindrome.slice(0, palindrome.length-1) + "b";
        }
    }

    return palindrome.slice(0, palindrome.length-1) + "b";
};