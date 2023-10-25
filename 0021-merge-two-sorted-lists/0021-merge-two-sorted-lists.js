/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// recursive version
// take the min between the 2 list heads,
// and set it's next to the merged list from the next recursive call
// passing in that's min.next in the next recursive call (to move through the list)

// base case is when either list reaches the end, so return the remaining other list
// after reaching base case, pointers get changed while building back up,
// merging both the lists in sorted order

var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};