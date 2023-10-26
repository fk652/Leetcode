/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// efficient solution using a fast and slow pointer
// start fast from head, and move it along n times

// if fast reached the end (tail.next which is null), 
// we know head is the nth node from the end, so just return head.next

// otherwise start a slow pointer from head
// move fast to the tail node while moving slow to next 
// this moves slow (sz - n) times, where sz is the total length of the list
// this leaves slow at the node just before the nth node from the end
// so just set slow.next to slow.next.next to remove the nth node from the end
// and return head since that hasn't changed in this case

var removeNthFromEnd = function(head, n) {
    let fast = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if (!fast) return head.next;
    
    let slow = head;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};