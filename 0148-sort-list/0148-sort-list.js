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

// basic merge sort but with linked lists
// use the slow and fast pointer strategy to find the list mid quickly
// then disconnect the right half
// recursively merge sort left and right halves
// then merge the left and right halves

// merging involves making a new list, and adding lowest values from left and right
// left and right list nodes will slowly be disconnected and turned into a sorted linked list
// add any remainder left or right nodes to the end of the sorted list
// and keep track of the original head of the sorted list

var sortList = function(head) {
    if (!head || !head.next) return head;
    
    let mid = head;
    let fast = head.next;
    while (fast && fast.next) {
        mid = mid.next;
        fast = fast.next.next;
    }

    let right = mid.next;
    mid.next = null;
    let left = sortList(head);
    right = sortList(right);
    
    return merge(left, right);
};

var merge = function(list1, list2) {
    const head = new ListNode();
    let curr = head;
    let curr1 = list1;
    let curr2 = list2;
    
    while (curr1 && curr2) {
        if (curr1.val < curr2.val) {
            curr.next = curr1;
            curr1 = curr1.next;
        } else {
            curr.next = curr2;
            curr2 = curr2.next;
        }
        curr = curr.next;
    }
    
    if (curr1) curr.next = curr1;
    if (curr2) curr.next = curr2;
    return head.next;
}