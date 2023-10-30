/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// first count all the nodes so we can keep track of leftover node count
// then start reversing nodes in batches of k, while count >= k

// we will need to keep track of a previous tail from the last reversed k nodes

// for every batch of reversals we need to:
// remember the current tail of the reversal, which is just the current node before reversing
// and keep track of a previous node, which ends up becoming the head of the reversed k nodes

// after reversal:
// current will be at the start of the next batch of nodes to (possibly) reverse
// so nothing needed to be done with current node at this time

// if there is a previous reversal tail, set it's next to the new head, which is prev,
// otherwise just update the new head
// then set the previous reversed tail to the current reversed tail

// then set current reversed tail's next to the current node
// if there is a next reversal, this tail's next becomes the head of the next reversed nodes
// since we keep track of this tail as the previous tail

// also decrement the count by k

var reverseKGroup = function(head, k) {
    let curr = head;
    let count = 0;
    while (curr) {
        curr = curr.next;
        count++;
    }

    curr = head;
    let prevTail = null;

    while (count >= k) {
        const currTail = curr;
        let prev = null;

        for (let i = 0; i < k; i++) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        prevTail ? prevTail.next = prev
                 : head = prev;
        prevTail = currTail;
        currTail.next = curr;
        count -= k;
    }

    return head;
};