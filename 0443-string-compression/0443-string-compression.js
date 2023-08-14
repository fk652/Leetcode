/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0;
    let j = 0;
    
    while (j <= chars.length) {
        if (chars[j] !== chars[i]) {
            if (j - i > 1) {
                const count = String(j-i);
                chars.splice(i+1, j - i - 1, ...count.split(''));
                j = i + count.length + 1;
            }
            
            i = j;
        } else {
            j++
        }
    }
    
    return chars.length;
};