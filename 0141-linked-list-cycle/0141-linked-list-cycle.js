/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// solution using a slow and fast pointer
// fast moves twice as fast as mid
// if fast ever comes back to slow, then we found a cycle

// O(n) solution since we at most go around the entire loop or list once
// where slow at most reaches the actual length end before fast catches up
// O(1) space used for the 2 pointers

var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    
    return false;
};

//-----------------------------------------------------------------------

// alternate solution setting each node's next to a dummy pointer
// not preferred if we can't alter the original list
// if we ever come back around to a node pointing to a dummy, a cycle is found
// O(n) runtime since we go through all n nodes to find a cycle
// O(1) space used for the dummy node and pointers

// var hasCycle = function(head) {
//     let dummy = new ListNode();
//     let curr = head;

//     while (curr) {
//         if (curr.next === dummy) return true;
//         const temp = curr.next;
//         curr.next = dummy;
//         curr = temp;
//     }
    
//     return false;;
// };