/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";
    
    let prefix = "";
    const first = strs[0];
    
    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            if (str[i] !== first[i]) return prefix;
        }
        prefix += first[i]
    }
    
    return prefix;
};