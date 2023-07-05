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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    var diameterHelper = function(root) {
        if (root === null) return 0;

        const left = diameterHelper(root.left);
        const right = diameterHelper(root.right);

        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);
    }
    
    diameterHelper(root);
    return diameter;
};
