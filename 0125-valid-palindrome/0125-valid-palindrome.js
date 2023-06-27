/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    const alphanumeric = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'])
    
    let i = 0;
    let j = s.length - 1;
    
    while (i < j) {
        if (!alphanumeric.has(s[i])) i++;
        else if (!alphanumeric.has(s[j])) j--;
        else {
            if (s[i] !== s[j]) return false;
            i++;
            j--;
        }
    }
    
    return true;
};