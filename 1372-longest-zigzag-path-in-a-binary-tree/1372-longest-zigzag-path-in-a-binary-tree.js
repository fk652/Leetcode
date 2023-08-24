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
var longestZigZag = function(root) {
    // try left and right from root node
    const left = zigZagHelper(root, true, -1);
    const right = zigZagHelper(root, false, -1);
    
    return Math.max(left, right);
};

var zigZagHelper = function(root, moveLeft, length) {
    if (!root) return length;

    if (moveLeft) {
        //go right but also consider left node as new starting point going left
        const zigRight = zigZagHelper(root.right, !moveLeft, length + 1);
        const newLeft = zigZagHelper(root.left, moveLeft, 0);
        length = Math.max(length, zigRight, newLeft)
    } else {
        //go left but also consider right node as new starting point going right
        const zigLeft = zigZagHelper(root.left, !moveLeft, length + 1);
        const newRight = zigZagHelper(root.right, moveLeft, 0);
        length = Math.max(length, zigLeft, newRight);
    }
    
    return length;
}