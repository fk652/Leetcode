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
 * @return {boolean}
 */

// do bfs and go level by level
// check if each level is symmetric by comparing both ends down to mid
// return false if any ends values don't match, otherwise keep building next level
// move onto next level and repeat
// return true if all levels were found to be symmetric
// note that we also push nulls into the next level
var isSymmetric = function(root) {
    let currLevel = [root];
    
    while (currLevel.length) {
        const nextLevel = [];
        const mid = Math.floor(currLevel.length/2);
        const n = currLevel.length;
        
        for (let i = 0; i < n; i++) {
            if (i < mid && currLevel[i]?.val !== currLevel[n-1-i]?.val) {
                return false;
            }
            
            if (currLevel[i]) {
                nextLevel.push(currLevel[i].left);
                nextLevel.push(currLevel[i].right);
            }
        }
        
        currLevel = nextLevel;
    }
    
    return true;
};