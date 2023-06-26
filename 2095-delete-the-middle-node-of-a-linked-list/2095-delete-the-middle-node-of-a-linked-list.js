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
var deleteMiddle = function(head) {
    if (!head.next) return null;
    
    let fast = slow = head;
    let mid;

    while (fast && fast.next) {
        fast = fast.next.next;
        mid = slow;
        slow = slow.next;
    }

    mid.next = mid.next.next;

    return head;
};