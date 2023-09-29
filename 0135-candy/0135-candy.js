/**
 * @param {number[]} ratings
 * @return {number}
 */

// if current rating > prev rating, then give current 1 more candy than prev
// otherwise give current only 1 candy

// also need to consider current > next rating
// then give 1 more candy than the next, otherwise only give 1
// going backwards through ratings

// candy given to current is the greater of increasing/decreasing current
// so the "higher candy than both neighbors" condition is always satisfied
// then just add up all those max values to get the minimum total candy

// can initialize increasing/decreasing arrays with all 1s, 
// instead of pushing/unshifting individual 1s

var candy = function(ratings) {
    const increasing = new Array(ratings.length).fill(1);
    const decreasing = new Array(ratings.length).fill(1);

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i-1]) {
            increasing[i] = increasing[i-1] + 1;
        }
    }

    for (let i = ratings.length-2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1]) {
            decreasing[i] = decreasing[i+1] + 1;
        }
    }

    let count = 0;
    for (let i = 0; i < ratings.length; i++) {
        count += Math.max(increasing[i], decreasing[i]);
    }
    return count;
};