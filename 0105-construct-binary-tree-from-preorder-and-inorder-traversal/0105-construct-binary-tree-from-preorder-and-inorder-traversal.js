/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let preI = 0;
    
    var helper = function(preorder, inorder, i, j) {
        if (i > j) return null;
    
        const root = new TreeNode(preorder[preI++]);
        if (i === j) return root;

        const mid = inorder.indexOf(root.val);

        root.left = helper(preorder, inorder, i, mid-1, preI);
        root.right = helper(preorder, inorder, mid+1, j, preI);

        return root;
    }
    
    return helper(preorder, inorder, 0, inorder.length-1);
};

