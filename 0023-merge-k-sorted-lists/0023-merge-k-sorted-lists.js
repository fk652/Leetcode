/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// create a new merged linked list with dummy head, keeping track of head and tail
// remove all empty linked lists from the array
// then start merging the remaining linked lists until none remain
// in each iteration, find the min node and connect it to the merged tail
// remove any linked lists that reach their end from the array
// finally return the merged list (starts after the dummy head)
// var mergeKLists = function(lists) {
//     const mergedHead = new ListNode();
//     let mergedTail = mergedHead;
//
//     let i = 0;
//     while (i < lists.length) {
//         if (!lists[i]) lists.splice(i, 1);
//         else i++;
//     }
//
//     while (lists.length > 0) {
//         let min = 0;
//         for (let i = 1; i < lists.length; i++) {
//             if (lists[i].val < lists[min].val) {
//                 min = i;
//             }
//         }
//
//         mergedTail.next = lists[min];
//         mergedTail = mergedTail.next;
//         lists[min] = lists[min].next;
//         if (!lists[min]) lists.splice(min, 1)
//     }
//
//     return mergedHead.next;
// };


// -----------------------------------------------------------------------------

// alternate solution that uses a helper function to merge two lists
// merge the first two lists in the array, then push it back into the array
// keep repeating until one merged list remains, then return that final list

// merging the first 2 lists in the array is alot faster than merging the last 2
// since doing the last 2 is same as merging the lists one at a time into the merged list
// so choosing the first 2 is like taking a more divide and conquer approach
// also prefer push instead of unshift (in JavaScript unshift is O(n) while push is O(1))
var mergeKLists = function(lists) {
    if (!lists.length) return null;

    while (lists.length > 1) {
        const listA = lists.shift();
        const listB = lists.shift();
        const merged = merge(listA, listB);
        lists.push(merged);
    }
    
    return lists[0];
};

// helper function to make a new merged list
// init a merged linked list with a dummy node, and keep track of tail
// keep adding the min head between listA and listB to the merged tail
// until either list reaches it's end
// then add any remainder of listA or listB to the merged tail
// return the head of the new merged list (comes after the dummy head)
// var merge = function(listA, listB) {
//     const mergedHead = new ListNode();
//     let mergedTail = mergedHead;

//     while (listA && listB) {
//         if (listA.val < listB.val) {
//             mergedTail.next = listA;
//             listA = listA.next;
//         } else {
//             mergedTail.next = listB;
//             listB = listB.next;
//         }
//         mergedTail = mergedTail.next;
//     }

//     if (listA) mergedTail.next = listA;
//     if (listB) mergedTail.next = listB;
//     return mergedHead.next;
// }

// recursive version of merge helper (simplifies the code)
// determine the min node and reassign it's next to the result of the recursive call
// moving along the min node's list in the next recurive call
// base case is when either list is null, return the remainder of the other list
// also doesn't waste space with a dummy merged head
var merge = function(listA, listB) {
    if (!listA) return listB;
    if (!listB) return listA;

    if (listA.val < listB.val) {
        listA.next = merge(listA.next, listB);
        return listA;
    } else {
        listB.next = merge(listA, listB.next);
        return listB;
    }
}