/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// using the built in JavaScript method that does the same thing
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

// find a char in haystack that is same as the first char in needle
// lookahead by needle.length chars and see if the string slice is the same as needle
// if true, return the index of that char in haystack
// return -1 if nothing was found
// var strStr = function(haystack, needle) {
//     const n = needle.length;
    
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] === needle[0] && haystack.slice(i, i + n) === needle) {
//             return i;
//         }
//     }
    
//     return -1;
// };