/**
 * @param {number[][]} points
 * @return {number}
 */

// this is the same as finding the min number of overlaps that contain all intervals
var findMinArrowShots = function(points) {
    // sort intervals by increasing start values
    points.sort((a, b) => a[0] - b[0]);
    
    // because points are sorted by start point
    // we only need to compare the overlap endpoint to the next increasing interval start
    // increasing the min count of arrows when a new overlap is needed
    let minCount = 1;
    let currOverlapEnd = points[0][1];
    
    // start with the 2nd interval
    for (let j = 1; j < points.length; j++) {
        // check if current overlap end > next interval start
        if (currOverlapEnd >= points[j][0]) {
            // update the current end if the next interval end is smaller
            // since current overlap gets smaller if next interval is fully within the current overlap
            if (currOverlapEnd > points[j][1]) {
                currOverlapEnd = points[j][1]
            }
        } else {
            // new overlap which needs a new arrow
            currOverlapEnd = points[j][1];
            minCount++;
        }
    }
    
    return minCount;
};