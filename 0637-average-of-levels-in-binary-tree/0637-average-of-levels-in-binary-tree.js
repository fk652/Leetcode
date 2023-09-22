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
 * @return {number[]}
 */

// use bfs to get the levels of each tree
// calculate the average node values in current level, and add to result
// take out current level nodes and build the next level
// follows a queue as part of BFS
var averageOfLevels = function(root) {
    const averages = [];
    const currLevel = [root];
    
    while (currLevel.length) {
        averages.push(currLevel.reduce((sum, node) => sum + node.val, 0) / currLevel.length);
        
        const n = currLevel.length;
        for (let i = 0; i < n; i++) {
            const node = currLevel.shift();
            if (node.left) currLevel.push(node.left);
            if (node.right) currLevel.push(node.right);
        }
    }
    
    return averages;
};