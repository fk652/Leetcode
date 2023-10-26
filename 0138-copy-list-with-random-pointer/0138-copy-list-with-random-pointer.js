/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// map each linked list node to it's copy
// can't use a regular hash because you can't properly use objects as keys
// so we need to use a JavaScript Map object
// can set a null to null map to make setting copy next/random pointers to null easier

// first go through each original node and map it to a new copy
// then go through all the original nodes again to set the copy's next and random nodes,
// using the mapped copy of the next and random nodes
// finally return the mapped head copy

// O(n) runtime going through the original linked list twice
// O(n) space since we are making a new copy

var copyRandomList = function(head) {
    const copyMap = new Map();
    copyMap.set(null, null);
    
    let curr = head;
    while (curr) {
        copyMap.set(curr, new Node(curr.val));
        curr = curr.next;
    }
    
    curr = head;
    while (curr) {
        const copy = copyMap.get(curr);
        copy.next = copyMap.get(curr.next);
        copy.random = copyMap.get(curr.random);
        curr = curr.next;
    }
    
    return copyMap.get(head);
};