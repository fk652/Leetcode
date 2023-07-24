/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    result = [];
    
    combHelper(candidates, target, 0, [], result);
    
    return result;
};

var combHelper = function(candidates, target, i, combo, result) {
    if (target < 0) return;
    if (target === 0) {
        result.push([...combo]);
        return;
    }
    
    for (let j = i; j < candidates.length; j++) {
        combo.push(candidates[j]);
        combHelper(candidates, target - candidates[j], j, combo, result);
        combo.pop();
    }
}