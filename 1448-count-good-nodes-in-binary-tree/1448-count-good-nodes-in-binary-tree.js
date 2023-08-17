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
var goodNodes = function(root, max = -Infinity) {
    if (!root) return 0;
    
    let good = 0;
    if (root.val >= max) good += 1;
    good += goodNodes(root.left, Math.max(root.val, max));
    good += goodNodes(root.right, Math.max(root.val, max));
    
    return good;
};