/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// brute force solution
// keep track of a current node (Li) starting from head
// for every Li, find the current tail of the list (Ln-i)
// removing the tail and inserting it between current and current.next

// to remove the tail we also keep track of it's previous node
// then set previous.next = null after we find the tail
// then put the tail between current and current.next by:
// setting tail.next = current.next
// then setting current.next = tail
// finally move current to tail.next (or current.next.next)

// keep repeating this process until we reach the last 1 or 2 nodes
// so keep going while current.next and current.next.next exists
// at that point no more swaps are needed

// return the original head since that doesn't change
// O(n^2) solution since for every Li node we have to iterate to the list end (Ln-i)

// var reorderList = function(head) {
//     let curr = head;
//     while (curr.next && curr.next.next) {
//         let prev = curr;
//         let tail = curr.next;
//         while (tail.next) {
//             prev = tail;
//             tail = tail.next;
//         }
//         prev.next = null;
        
//         tail.next = curr.next;
//         curr.next = tail;
//         curr = tail.next;
//     }

//     return head;
// };


// -----------------------------------------------------------------------------

// more efficient solution
// see the pattern that we can merge 2 lists in an alternating pattern to get the result
// the 1st list being the 1st half of the list
// the 2nd list being the 2nd half of the list, but reversed

// so first find the mid of the list
// can use the quick solution using a fast and slow/mid pointer
// because fast moves twice as fast, the mid/slow pointer will end up at mid

// next we need to reverse the 2nd half of the list (all the nodes after mid)
// so keep track of a previous and current (where current starts at mid.next)
// then start reversing the nodes by setting curr.next to prev
// prev becomes head of the reversed list, since curr becomes the tail.next (null)
// also set mid.next to null to seperate the 2 lists

// finally merge the two lists in an alternating pattern
// list2 should be smaller than list1, so we go until list2 is empty
// for every list1 node, insert the list2 head between the curr list1 and list1.next
// moving list1 and list2 to their original nexts
// this means keeping track of the original list2.next, which list2 becomes after the swaps
// and moving list1 to list1.next.next (or list2.next) after the swaps

// finding mid is within O(n) time
// reversing the 2nd half is within O(n) time
// merging the two halfs together is O(n) time
// so overall runtime is O(n)

var reorderList = function(head) {
    let mid = head;
    let fast = head;
    while (fast && fast.next) {
        mid = mid.next;
        fast = fast.next.next;
    }

    let prev = null;
    let curr = mid.next;
    while (curr) {
        let temp = curr.next
        curr.next = prev;
        [prev, curr] = [curr, temp];
    }
    mid.next = null;
    
    let list1 = head;
    let list2 = prev;
    while (list2) {
        let temp = list2.next;
        list2.next = list1.next;
        list1.next = list2;
        list1 = list2.next;
        list2 = temp;
    }

    return head;
};