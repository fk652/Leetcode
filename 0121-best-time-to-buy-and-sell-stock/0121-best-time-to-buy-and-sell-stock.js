/**
 * @param {number[]} prices
 * @return {number}
 */

// go through each price and keep track of current min price (or 0) and max profit
// update max profit if current price - current min price is greater than current max profit
// update min price if current price is smaller

// since we go through prices in order from first to last day,
// and min price comes before current price, and min price being updated after max profit
// we can safely update max profit by checking current price - min price

var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (const price of prices) {
        maxProfit = Math.max(maxProfit, price - minPrice);
        minPrice = Math.min(minPrice, price);
    }
    
    return maxProfit;
};