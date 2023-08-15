/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let prev = null;
    let mid = head;
    let fast = head;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        
        // reverse the first half
        const next = mid.next;
        mid.next = prev;
        prev = mid;
        mid = next;
    }
    
    // prev will be head of reversed first half
    let max = -Infinity;
    while (prev) {
        max = Math.max(max, prev.val + mid.val);
        prev = prev.next;
        mid = mid.next;
    }
    
    return max;
};