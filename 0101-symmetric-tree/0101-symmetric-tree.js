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

// recursive solution, checking if symmetric node values match
// and their symmetric subtrees also match
var isSymmetric = function(root) {
    return checkSymmetry(root.left, root.right);
};

var checkSymmetry = function(node1, node2) {
    // base case when either node is null
    // then return whether or not both nodes are null
    if (!node1 || !node2) return !node1 && !node2;

    // check if both symmetric node values match
    // and the symmetric subtrees match
    return node1.val === node2.val &&
           checkSymmetry(node1.left, node2.right) &&
           checkSymmetry(node1.right, node2.left);
}

// bfs solution, going level by level, and check if each level is symmetric
// check if a level is symmetric by comparing both ends down to mid
// return false if any ends values don't match, otherwise keep building next level
// move onto next level and repeat
// return true if all levels were found to be symmetric
// note that we also push nulls into the next level
// var isSymmetric = function(root) {
//     let currLevel = [root];
    
//     while (currLevel.length) {
//         const nextLevel = [];
//         const mid = Math.floor(currLevel.length/2);
//         const n = currLevel.length;
        
//         for (let i = 0; i < n; i++) {
//             if (i < mid && currLevel[i]?.val !== currLevel[n-1-i]?.val) {
//                 return false;
//             }
            
//             if (currLevel[i]) {
//                 nextLevel.push(currLevel[i].left);
//                 nextLevel.push(currLevel[i].right);
//             }
//         }
        
//         currLevel = nextLevel;
//     }
    
//     return true;
// };