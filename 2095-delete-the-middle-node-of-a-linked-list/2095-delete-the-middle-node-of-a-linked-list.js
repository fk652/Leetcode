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
    const nodes = [];
    let current = head;
    while (current !== null) {
        nodes.push(current);
        current = current.next;
    }
    
    if (nodes.length <= 1) return null;
    
    const midIdx = Math.floor(nodes.length/2);
    const midNode = nodes[midIdx];
    const prev = nodes[midIdx-1];
    
    prev.next = midNode.next;
    midNode.next = null;
    return head;
};