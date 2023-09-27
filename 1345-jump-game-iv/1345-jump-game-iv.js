/**
 * @param {number[]} arr
 * @return {number}
 */

// bfs solution to find shortest path to the end
// Map adjacent spots to their values
// Can optimize mapping by skipping adjacent 3+ repeats,
// since we only care about jumping to the start or end of 3+ repeats
// Can also optimize bfs by clearing mapped neighbors since we know they're visited
// Return distance once the end is found

var minJumps = function(arr) {
    const spotMap = {};
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] === arr[i-1] && arr[i] === arr[i+1]) i++;

        arr[i] in spotMap ? spotMap[arr[i]].push(i)
                          : spotMap[arr[i]] = [i];
    }

    const visited = new Set([0]);
    const queue = [0];
    let distance = 0;

    while (queue.length) {
        const m = queue.length;
        for (let i = 0; i < m; i++) {
            const spot = queue.shift();
            if (spot === arr.length - 1) return distance;

            // also need to consider adjacent spots
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