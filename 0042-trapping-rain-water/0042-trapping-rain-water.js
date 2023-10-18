/**
 * @param {number[]} height
 * @return {number}
 */

// need to add up total rainwater trapped
// use a two pointer strategy, i/j, to keep track of left/right ends,
// incrementing/decrementing i/j until they cross
// also keep track of a max left and max right end

// increment/decrement i/j if that wall is smaller, 
// since the amount of water trapped is dependent on the smaller end's height
// then add up rain water if new left/right went down (rainwater trapped there)
// otherwise update the max left/right
// this adds up rainwater column by column

var trap = function(height) {
    let j = height.length - 1;
    let i = maxI = maxJ = totalWater = 0;

    while (i < j) {
        if (height[i] < height[j]) {
            height[i] < maxI ? totalWater += maxI - height[i]
                             : maxI = height[i];
            i++;
        } else {
            height[j] < maxJ ? totalWater += maxJ - height[j]
                             : maxJ = height[j];
            j--;
        }
    }

    return totalWater;
};