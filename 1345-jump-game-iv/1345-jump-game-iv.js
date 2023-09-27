/**
 * @param {number[]} arr
 * @return {number}
 */

// can use bfs to find shortest path to the end
// map adjacent spots to their values
// can optimize by squashing adjacent 3 or more repeats together in the mapping
// can optimize bfs by clearing the mapped neighbors since we know they're visited
// return distance once the end is found

var minJumps = function(arr) {
    const spotMap = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in spotMap) {
            const spots = spotMap[arr[i]];
            if (arr[i] === arr[i-2]) {
                spots[spots.length-1] = i;
            } else {
                spots.push(i);
            }
        } else {
            spotMap[arr[i]] = [i];
        }

        // arr[i] in spotMap ? spotMap[arr[i]].push(i)
        //                   : spotMap[arr[i]] = [i];
    }

    const visited = new Set([0]);
    const queue = [0];
    let distance = 0;

    while (queue.length) {
        const m = queue.length;
        for (let i = 0; i < m; i++) {
            const spot = queue.shift();
            if (spot === arr.length - 1) return distance;

            const neighbors = spotMap[arr[spot]];
            if (spot+1 < arr.length) neighbors.push(spot+1);
            if (spot-1 >= 0) neighbors.push(spot-1);

            while (neighbors.length) {
                const n = neighbors.pop();
                if (!visited.has(n)) {
                    visited.add(n);
                    queue.push(n);
                }
            }
        }
        distance++;
    }
    
    // guaranteed a solution so no default return value needed here
};