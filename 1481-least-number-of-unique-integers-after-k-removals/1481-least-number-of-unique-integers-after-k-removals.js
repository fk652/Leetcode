/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const id_counts = {}
    for (let id of arr) {
        id in id_counts ? id_counts[id] += 1 : id_counts[id] = 1;
    }
    
    const sorted = Object.values(id_counts).sort((a, b) => b - a);
    
    let removed = 0;
    while (removed + sorted[sorted.length-1] <= k) {
        removed += sorted.pop();
    }
    
    return sorted.length;
};