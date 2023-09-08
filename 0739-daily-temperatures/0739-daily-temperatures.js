/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// by storing a stack of decreasing temp days
// we can calculate the result for that day once we come across a higher temp
// and consecutively get result for previous lower temp days before that higher temp
// results in O(n) solution that uses O(n) space

var dailyTemperatures = function(temperatures) {
    // since result is initialized with all 0, 
    // any days with no higher days found will stay 0
    const result = Array(temperatures.length).fill(0);
    
    // stack will contain indexes of decreasing temp days in order
    // since lower temp days are consecutively removed once a higher day is found
    // thus only lower temps that havent found a higher day yet remain stored
    const stack = [];
    
    // go through each temp
    // while current day temp higher than lowest temp day in stack,
    // pop and calculate answer for that stack day's result
    // finally add current day to stack
    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length && 
            temperatures[i] > temperatures[stack[stack.length-1]]
        ) {
            const index = stack.pop();
            result[index] = i - index;    
        }
        
        stack.push(i);
    }
    
    return result;
};