/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// can use a divide & conquer/binary search like approach to build the BST
// the root is middle of the array
// then recursively build the left subtree using the remaining left array half
// and the right subtree using the remaining right array half
// return the root at the end

// use two pointers, i and j, to keep track of current low and high array ends
// instead of making new copies of the sub arrays
// base case is when i > j, meaning an empty array/subtree

var sortedArrayToBST = function(nums, i=0, j=nums.length-1) {
    if (i > j) return null;
    
    const mid = Math.floor((i + j) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums, i, mid-1);
    root.right = sortedArrayToBST(nums, mid+1, j);
    
    return root;
};