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
    let longest = 0;
    
    var zigZagHelper = function(root, moveLeft, currentLength) {
        if (!root) return;

        longest = Math.max(longest, currentLength);

        if (moveLeft) {
            //go right but also consider left node as new starting point going left
            zigZagHelper(root.right, !moveLeft, currentLength + 1);
            zigZagHelper(root.left, moveLeft, 1);
        } else {
            //go left but also consider right node as new starting point going right
            zigZagHelper(root.left, !moveLeft, currentLength + 1);
            zigZagHelper(root.right, moveLeft, 1);
        }
    }

    // try left and right from root node
    zigZagHelper(root, true, 0);
    zigZagHelper(root, false, 0);
    
    return longest;
};