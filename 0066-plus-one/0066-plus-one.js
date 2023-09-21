/**
 * @param {number[]} digits
 * @return {number[]}
 */

// Need to consider adding 1 to a number ending with 9s,
// in this case you need to keep carrying over 1 to the next digit,
// otherwise you can just increment the digit by 1 and end there

// Go from end to start of the array, least to most significant digit

// Add 1 to the start of the array if carryover still exists,
// which happens if the original numbers had all 9s

var plusOne = function(digits) {
    let addOne = true;
    let i = digits.length - 1;
    
    while (addOne && i >= 0) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            addOne = false;
        }

        i--;
    }
    
    if (addOne) digits.unshift(1);
    
    return digits;
};