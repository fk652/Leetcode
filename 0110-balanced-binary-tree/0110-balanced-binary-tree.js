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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return balanceHelper(root) !== -1;
};

var balanceHelper = function(root) {
    if (!root) return 0;
    
    const left = balanceHelper(root.left);
    const right = balanceHelper(root.right);
    
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1;
    } else {
        return 1 + Math.max(left, right);
    }
}