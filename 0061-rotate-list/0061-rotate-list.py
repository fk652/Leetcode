# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# first count the number of nodes, n
# while also getting the tail, which will end up pointing to the old head
# do k %= n to find the final rotation in case k > n (unnecessary repeats)
# then find the new tail, which is the k+1 node from the end
# break the new head off from the new tail
# then set the original tail's next to the old head

# this is all the same as taking the last k nodes, breaking that part off
# then connecting the end of that k nodes segment to the remaining original

class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if head is None or head.next is None: return head 
        
        n = 1
        tail = head
        while tail.next:
            tail = tail.next
            n += 1
        
        k %= n
        if k == 0: return head
        
        new_tail = head
        while n > k + 1:
            new_tail = new_tail.next
            n -= 1
        
        new_head = new_tail.next
        new_tail.next = None
        tail.next = head

        return new_head
            
        