/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const result = lcaHelper(root, p, q);
    return result[0];
};

var lcaHelper = function(root, p, q) {
    if (!root) return [null, 0];
    
    const left = lcaHelper(root.left, p, q);
    const right = lcaHelper(root.right, p, q);
    
    if (root === p || root === q) {
        if (left[1] === 1 || right[1] === 1) return [root, 2];
        return [root, 1];
    }
    if (left[1] === 1 && right[1] === 1) return [root, 2];
    if (left[1] > 0) return left;
    if (right[1] > 0) return right;
    return [null, 0];
}