/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;
    
    for (price of prices) {
        max = Math.max(max, price - min);
        min = Math.min(min, price);
    }
    
    return max;
};