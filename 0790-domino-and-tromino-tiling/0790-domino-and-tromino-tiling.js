/**
 * @param {number} n
 * @return {number}
 */

// simpler version to previous solution below using bottom up approach
// the pattern is f(n) = (2 * f(n-1)) + f(n-3)
// final answer needs to be mod (10**9) + 7
var numTilings = function(n, state = 0, memo = {}) {
    const MOD = (10**9) + 7;
    const dp = {};
    
    // base cases
    dp[1] = 1
    dp[2] = 2
    dp[3] = 5
    
    for (let i = 4; i <= n; i++) {
        dp[i] = (2 * dp[i-1]) + dp[i-3];
        dp[i] %= MOD;
    }
    
    return dp[n];
};


// OLD SOLUTION (top down memoization approach)
 // the board is 2xN, so each column has 2 spots
 // n will represent the current column number
 // we recursively solve for previous columns and add up the ways to fill them
 // state represents the spots filled in the current column
 // state 0 = column fully filled, state 1 = top spot filled, state 2 = bottom spot filled
 // depending on current state, we recursively solve the different ways to fill the previous column(s) to get the current state

 // the recursive pattern is like this:
 // base case is (n < 3) where # of ways = n

 // if state === 0 we solve and add up these patterns:
 // vertical domino last, 2 stacked horizontal dominos, tromino, tromino flipped
 /*
    |*|*|-|    |*|-|-|    |*|-|-|    |*|*|-|
    |*|*|-|    |*|-|-|    |*|*|-|    |*|-|-|
 */
 // (note this requires n-2 columns)

 // if state === 1 we solve and add up these patterns:
 // tromino, horizontal domino on top
 /*
    |-|-|    |-|-|
    |-|x|    |x|x|
 */

// if state === 2 we solve and add up these patterns:
// tromino, horizontal domino on bottom
/*
    |-|x|    |x|x|
    |-|-|    |-|-|
*/
// (the last column in each diagram is the n column to solve for)
// x represent spots to be left empty
// * represents spots already filled
// - represents spots to fill/solve for

// state starts at 0 because the final problem needs the entire board filled up
// var numTilings = function(n, state = 0, memo = {}) {
//     if (n < 3) return n;
    
//     const key = `${n} ${state}`;
//     if (key in memo) return memo[key];

//     if (state === 0) {
//         memo[key] = numTilings(n-1, 0, memo) + numTilings(n-2, 0, memo) + numTilings(n-2, 1, memo) + numTilings(n-2, 2, memo);
//     } else if (state === 1) {
//         memo[key] = numTilings(n-1, 0, memo) + numTilings(n-1, 2, memo);
//     } else if (state === 2) {
//         memo[key] = numTilings(n-1, 0, memo) + numTilings(n-1, 1, memo);
//     }
    
//     // final answer must be returned modulo ((10**9) + 7)
//     memo[key] = memo[key] % ((10**9)+7);
//     return memo[key];
// };