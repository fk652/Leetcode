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

// run inorder traversal to get all tree values in sorted order
// using a nested helper function to run inorder dfs on the tree
// inorder goes from left -> current -> right

// then go through array of values
// get difference between current and prev values
// keeping track of the minimum difference

var getMinimumDifference = function(root) {
    const values = [];
    const dfs = function(root) {
        if (!root) return;
        
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    
    let min = Infinity;
    for (let i = 1; i < values.length; i++) {
        min = Math.min(min, values[i] - values[i-1]);
    }
    return min;
};