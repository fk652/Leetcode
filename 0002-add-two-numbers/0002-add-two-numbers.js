/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carryOver = 0;
    let current1 = l1;
    let current2 = l2;
    let head = tail = null;
    
    while (current1 !== null || current2 !== null || carryOver !== 0) {
        let sum = carryOver;
        
        if (current1 !== null) {
            sum += current1.val;
            current1 = current1.next;
        }
        
        if (current2 !== null) {
            sum += current2.val;
            current2 = current2.next;
        }
        
        carryOver = (sum > 9) ? 1 : 0;
        const node = new ListNode(sum % 10);
        
        if (head === null) {
            head = tail = node;
        } else {
            tail.next = node;
            tail = tail.next;
        }
    }
    
    return head;
};