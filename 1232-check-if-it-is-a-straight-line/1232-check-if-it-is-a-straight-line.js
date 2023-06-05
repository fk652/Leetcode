/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if (coordinates.length <= 1) return false;
    if (coordinates.length === 2) return true;
    
    const deltaX = coordinates[1][0] - coordinates[0][0];
    const deltaY = coordinates[1][1] - coordinates[0][1];
    
    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        const deltaXi = x - coordinates[0][0];
        const deltaYi = y - coordinates[0][1];
        
        if (deltaX * deltaYi !== deltaY * deltaXi) return false;   
    }
    return true;
};