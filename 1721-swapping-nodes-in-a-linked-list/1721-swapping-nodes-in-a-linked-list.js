/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// find the first and last kth nodes while also keeping track of their previous
// then swap the nodes in the linked list

// also need to handle edge cases like:
// swapping the same node with itself,
// or last node coming before the first node,
// or null prev pointers,
// or first and last nodes being next to each other

var swapNodes = function(head, k) {
    // handling edge cases
    if (!head || !head.next) return head;

    // find first node and it's previous
    let firstNodePrev = null;
    let firstNode = head;
    for (let i = 0; i < k-1; i++) {
        firstNodePrev = firstNode;
        firstNode = firstNode.next;
    }
    
    // find last node and it's previous
    let lastNodePrev = null;
    let lastNode = head;
    let fast = firstNode.next;
    while (fast) {
        lastNodePrev = lastNode;
        lastNode = lastNode.next;
        fast = fast.next;
    }
    
    // handling edge cases
    if (firstNode === lastNode) return head;
    if (!lastNodePrev || firstNodePrev === lastNode) {
        [lastNodePrev, firstNodePrev] = [firstNodePrev, lastNodePrev];
        [lastNode, firstNode] = [firstNode, lastNode];
    }

    // temp pointers to the first's/last's next nodes
    const firstNodeNext = firstNode.next;
    const lastNodeNext = lastNode.next;

    // swapping the first/last nodes
    // and handling if they're adjacent to each other
    firstNode.next = lastNodeNext;
    if (firstNodeNext === lastNode) {
        lastNode.next = firstNode;
    } else {
        lastNodePrev.next = firstNode;
        lastNode.next = firstNodeNext;
    }
    
    // return new head if needed
    if (!firstNodePrev) return lastNode;
    firstNodePrev.next = lastNode;
    return head;
};


// -----------------------------------------------------------------------------------------


// simply get the first and last kth nodes, then swap their values
// already handles all the edge cases where we swap the same node or head node

// start first node pointer from head and move k - 1 times 
// list is 1-indexed so we end at i < k-1 instead of k (could also start i from 1 instead)

// we can quickly get last node after finding the first node:
// start a fast pointer from first node, and start last node pointer from head
// move fast pointer to tail while also moving last node pointer
// this ends up moving n - k times, which gets us to the kth node from the end

// var swapNodes = function(head, k) {
//     let firstNode = head;
//     for (i = 0; i < k - 1; i++) {
//         firstNode = firstNode.next;
//     }

//     let fast = firstNode;
//     let lastNode = head;
//     while (fast.next) {
//         fast = fast.next;
//         lastNode = lastNode.next
//     }

//     [firstNode.val, lastNode.val] = [lastNode.val, firstNode.val];
//     return head
// };