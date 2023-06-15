/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numeralVals = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }
    
    let int = 0;
    // for (const [numeral, val] of Object.entries(numeralVals)) {
    //     while (s.startsWith(numeral)) {
    //         int += val;
    //         s = s.slice(numeral.length);
    //     }
    // }
    
    let i = 0;
    while (i < s.length) {
        const pair = s[i] + s[i+1];
        if (numeralVals.hasOwnProperty(pair)) {
            int += numeralVals[pair];
            i += 2;
        } else {
            int += numeralVals[s[i]];
            i++;
        }
    }
    
    return int;
};