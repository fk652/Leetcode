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
 * @param {number} targetSum
 * @return {boolean}
 */

// use recursive dfs to count different path sums to leaf nodes
// keeping track of currentSum down the recursion, adding current node value to it
// return true if the currentSum = targetSum and current node is a leaf (no children),
// or check left and right paths and return if either of those resulted true
var hasPathSum = function(root, targetSum, currentSum = 0) {
    if (!root) return false;
    
    const newSum = currentSum + root.val;
    if (newSum === targetSum && !root.left && !root.right) return true;
    
    const leftHasSum = hasPathSum(root.left, targetSum, newSum);
    const rightHasSum = hasPathSum(root.right, targetSum, newSum);
    return leftHasSum || rightHasSum;
};