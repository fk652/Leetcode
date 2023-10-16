/**
 * @param {number[]} heights
 * @return {number}
 */

// the stack will contain heights in increasing order, 
// but just their indexes to make calculating area widths easier

// go through each height by index
// while current height is smaller than the top stack's height:
// pop and use the stack's top as the min height
// use width starting from the new stack's top index to just before current index
// but if nothing is left in the stack, the width goes from [start, before current]
// update the max area using height * width if needed
// keep repeating and popping off the stack while current height < stack's top height
// always push the current height into the stack afterwards

// after the end of heights is reached, repeat the process for all remaining stack heights
// can simplify this into the original loop to DRY up code

// this all works because we calculate the max area possible from each height
// and every height will be pushed onto the stack
// we consider each height as min, and keep track of max possible width with the stack
// min height is whatever is currently on top of the stack
// the width starts after the 2nd stack item and ends just before the current index
// the 2nd item in the stack represents just how far the current min height can reach
// e.g when heights are [1, 5, 6, 2], using 2 as min height, the start is just after 1
// when 2 is the current height, the stack contains [0] (height [1])

// but in the case there is no 2nd stack item, we start from 0
// this happens when current height is smaller than everything in the stack,
// or we reach the last item when popping off the remainder
// since the stack is always in increasing order, and only pops while the current < stack top,
// the last stack height is guaranteed to be the smallest between [start, before current]

// we basically find the areas backwards by popping off min heights from the stack
// and since the stack contains indexes of heights, can easily get the width's start position
// and we make sure the start position is valid by popping off while current height < stack top

var largestRectangleArea = function(heights) {
    const stack = [];
    let maxArea = -1;

    for (let i = 0; i <= heights.length; i++) {
        while (stack.length && 
            (i === heights.length || heights[i] < heights[stack[stack.length-1]])
        ) {
            const h = heights[stack.pop()];
            const start = (stack.length ? stack[stack.length-1] + 1 : 0);
            const w = i - start;
            maxArea = Math.max(maxArea, w * h);
        }
        stack.push(i);
    }

    return maxArea;
};