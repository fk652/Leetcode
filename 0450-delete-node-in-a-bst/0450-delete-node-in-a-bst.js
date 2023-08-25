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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return root;
    
    if (root.val === key) {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        
        const minNode = getMinNode(root.right);
        root.right = deleteNode(root.right, minNode.val);
        minNode.left = root.left;
        minNode.right = root.right;
        root = minNode;
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    } else {
        root.left = deleteNode(root.left, key)
    }
    
    return root;
};

var getMinNode = function(node) {
    while (node.left) node = node.left;
    return node;
}