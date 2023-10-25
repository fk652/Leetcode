/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// keep track of a current and previous node
// go through each node and set a temporary pointer to current.next node
// set current.next to the previous node
// then set previous to current and current to the temporary node
// prev will end up at the new head since current becomes what is after the tail (null)
// so return prev in the end

var reverseList = function(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        const temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    
    return prev;
};