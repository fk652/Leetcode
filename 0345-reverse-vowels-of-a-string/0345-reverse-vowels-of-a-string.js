/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let i = 0;
    let j = s.length-1;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    s = s.split('');
    
    while (i < j) {
        if (!vowels.has(s[i])) i++;
        else if (!vowels.has(s[j])) j--;
        else {
            [s[i], s[j]] = [s[j], s[i]];
            i++;
            j--;
        }
    }
    
    return s.join('');
};