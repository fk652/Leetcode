/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// recursive solution, checking if node values at similar positions match
// and recursively checking if the left subtrees and right subtrees match
// var isSameTree = function(p, q) {
//     if (!p || !q) return !p && !q;
    
//     return p.val === q.val &&
//            isSameTree(p.left, q.left) &&
//            isSameTree(p.right, q.right);
// };

// bfs solution, running bfs on both tree
// check if the node values at the front of both bfs queues match,
// since they are similar positions in both trees
var isSameTree = function(p, q) {
    const pQueue = [p];
    const qQueue = [q];

    while (pQueue.length || qQueue.length) {
        if (pQueue[0]?.val !== qQueue[0]?.val) {
            return false;
        }

        const pNode = pQueue.shift();
        if (pNode) {
            pQueue.push(pNode.left);
            pQueue.push(pNode.right);
        }

        const qNode = qQueue.shift();
        if (qNode) {
            qQueue.push(qNode.left);
            qQueue.push(qNode.right);
        }
    }

    return true;
};