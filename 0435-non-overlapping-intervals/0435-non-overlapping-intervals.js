/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // sort intervals by increasing start values
    intervals.sort((a, b) => a[0] - b[0]);
    
    // use a two pointer strategy to compare and find overlapping intervals
    let removed = 0;
    let i = 0;
    
    // start with the 2nd interval
    for (let j = 1; j < intervals.length; j++) {
        // check if current end > next start
        if (intervals[i][1] > intervals[j][0]) {
            removed++;
            
            // if current end > next end (meaning current fully contains next interval)
            // then consider current removed and move it to next interval
            // this is in case current contains alot of other smaller intervals
            // it is better to remove the large containing interval to minimize removals
            if (intervals[i][1] > intervals[j][1]) {
                i = j;
            }
        } else {
            i = j;
        }
    }
    
    return removed;
};