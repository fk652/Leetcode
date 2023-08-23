/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n, combos = [], currentCombo = [], currentSum = 0, currentNum = 1) {
    if (k === 0) {
        if (currentSum === n) {
            combos.push(currentCombo);
        }
        return combos;
    }
    
    
    for (let i = currentNum; i < 10; i++) {
        combinationSum3(k-1, n, combos, [...currentCombo, i], currentSum + i, i+1);
    }
    
    return combos;
};