/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    // initialize bought as -Infinity so 
    let profit = 0;
    let bought = -Infinity;
    
    // update profit when it's better to sell current bought
    // update bought when it's better to buy current day's price 
    // max profit is always being added onto when doing (profit - price - fee)
    for (const price of prices) {
        profit = Math.max(profit, bought + price);
        bought = Math.max(bought, profit - price - fee);
    }
    
    // final profit is the max profit
    return profit;
};