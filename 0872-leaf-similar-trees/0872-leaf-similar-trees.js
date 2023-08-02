/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leaves1 = findLeaves(root1);
    const leaves2 = findLeaves(root2);
    
    if (leaves1.length !== leaves2.length) {
        return false;
    }
    
    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) {
            return false;
        }
    }
    
    return true;
};

var findLeaves = function(root, leaves = []) {
    if (!root) return leaves;
    
    if (!root.left && !root.right) {
        leaves.push(root.val);
    }
    
    if (root.left) findLeaves(root.left, leaves);
    if (root.right) findLeaves(root.right, leaves);
    
    return leaves;
}