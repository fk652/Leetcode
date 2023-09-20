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

// efficient solution by finding the height of a complete tree
// a complete tree has 2^h - 1 nodes, where h is the tree height
// easily find height by going down the left or right children until leaf node is reached
// a complete tree will have leftmost and rightmost heights the same
// if not, recursively count the right and left subtree nodes, and +1 for root node
// worst case is calculating heights at every level, so O(log^2(n)) complexity
var countNodes = function(root) {
    if (!root) return 0;

    const [leftHeight, rightHeight] = getLeftRightHeights(root);

    if (leftHeight === rightHeight) return 2**leftHeight - 1;
    return 1 + countNodes(root.left) + countNodes(root.right);
};

// helper function to calculate leftmost and rightmost heights
var getLeftRightHeights = function(root) {
    let left = root;
    let right = root;
    let leftHeight = 0;
    let rightHeight = 0;

    while (left) {
        leftHeight++;
        left = left.left;
    }

    while (right) {
        rightHeight++;
        right = right.right;
    }

    return [leftHeight, rightHeight];
}


// brute force approach by using bfs to count all the nodes
// var countNodes = function(root) {
//     if (!root) return 0;

//     let count = 0;
//     const queue = [root];
    
//     while (queue.length) {
//         const node = queue.shift();
//         count++;

//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//     }

//     return count;
// };