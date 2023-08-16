/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    const levelSums = [];
    const queue = [[root, 0]];
    
    while (queue.length) {
        const [node, level] = queue.shift();
        
        if (level > levelSums.length-1) {
            levelSums.push(node.val);
        } else {
            levelSums[level] += node.val;
        }
        
        if (node.left) queue.push([node.left, level+1]);
        if (node.right) queue.push([node.right, level+1]);
    }
    
    let maxSum = -Infinity;
    let maxLevel = null;
    
    for (let i = 0; i < levelSums.length; i++) {
        if (levelSums[i] > maxSum) {
            maxSum = levelSums[i];
            maxLevel = i;
        }
    }
    
    return maxLevel + 1;
};