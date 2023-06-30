/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = '';
    
    let i = 0;
    let carry = 0;
    while (i < a.length || i < b.length) {
        const left = parseInt(a[a.length - 1 - i]) || 0;
        const right = parseInt(b[b.length - 1 - i]) || 0;
        
        const sum = left + right + carry;
        result = (sum % 2).toString() + result;
        carry = sum >= 2 ? 1 : 0;
        
        i++;
    }
    
    if (carry) result = carry.toString() + result;
    
    return result;
};