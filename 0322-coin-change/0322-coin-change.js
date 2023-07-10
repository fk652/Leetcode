/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount, memo={}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    
    let possible = false;
    let min = Infinity;
    
    for (let coin of coins) {
        if (coin <= amount) {
            possible = true;
            result = coinChange(coins, amount-coin, memo);
            
            if (result === -1) result = Infinity;
            min = Math.min(min, result);
        }
    }
    
    if (possible && min !== Infinity) {
        memo[amount] = min + 1;
    } else {
        memo[amount] = -1;
    }
    
    return memo[amount];
};