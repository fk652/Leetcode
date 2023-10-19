/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// the min speed, k, is in the range [1, max bananas in the piles]
// so we do binary search between that range to find the min k,
// that satisfies the condition of eating all bananas in h hours, 
// using mid as k

// at every search iteration, find how many hours it takes to eat all bananas for that k
// then check if it satisfies the h condition or not (hours <= h)
// if it does, try finding a better lower k in binary search
// otherwise find a higher k to satisfy the condition

// high pointer will end up at the minimum k

// note that for this binary search we break when low >= high, 
// and set high = mid when searching the left half
// we could also break at low > high and set high = mid - 1 instead,
// but then high would end up 1 below the min k, so we'd have to return high + 1

var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.max(...piles);
    
    while (low < high) {
        const mid = Math.floor((high + low) / 2);
        const hours = piles.reduce((sum, num) => sum + Math.ceil(num/mid), 0);
        hours <= h ? high = mid
                   : low = mid + 1;
    }
    
    return high;
};