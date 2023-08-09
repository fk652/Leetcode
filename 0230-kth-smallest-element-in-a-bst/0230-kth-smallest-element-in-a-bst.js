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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const sortedNodes = [];
    
    var inorderTraverse = function(root) {
        if (!root) return;
        
        inorderTraverse(root.left);
        sortedNodes.push(root.val);
        inorderTraverse(root.right);
    }
    
    inorderTraverse(root);
    
    return sortedNodes[k-1];
};