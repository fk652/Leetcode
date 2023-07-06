/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];
    
    let i = 0;
    while (i < intervals.length && newInterval[0] > intervals[i][1]) {
        result.push(intervals[i]);
        i++;
    }
    
    const overlap = [];
    while (
        i < intervals.length &&
        ((newInterval[0] >= intervals[i][0] && newInterval[0] <= intervals[i][1]) ||
        (newInterval[1] >= intervals[i][0] && newInterval[1] <= intervals[i][1]) || 
        (newInterval[0] <= intervals[i][0] && newInterval[1] >= intervals[i][1]))
    ) {
        overlap.push(intervals[i]);
        i++;
    }
    
    if (overlap.length) {
        const start = Math.min(overlap[0][0], newInterval[0]);
        const end = Math.max(overlap[overlap.length - 1][1], newInterval[1]);
        result.push([start, end]);
    } else {
        result.push(newInterval);
    }
    
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
};