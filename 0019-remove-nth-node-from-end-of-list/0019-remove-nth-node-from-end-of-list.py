# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# count the sz of the linked list
# then go to the node before the nth from the end node
# and remove the nth from the end node by setting it's prev.next to it's next
# also need to handle cases where head is being removed (sz == n)
# class Solution:
#     def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
#         sz = 0
#         curr = head
#         while curr:
#             sz += 1
#             curr = curr.next
#         if sz == n: return head.next
            
#         curr = head
#         while sz > n + 1:
#             curr = curr.next
#             sz -= 1
#         curr.next = curr.next.next

#         return head


# quickly get to the nth from the end node in one pass
# setup a fast and slow pointer
# first move fast to the nth node from the start
# then move fast to the end while also moving slow
# slow will end up being nth from the end
# also need to handle when head is being removed (fast is past tail after the initial offset)
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        fast = head
        while n > 0:
            fast = fast.next
            n -= 1
        if not fast: return head.next

        slow = head
        while fast.next:
            fast = fast.next
            slow = slow.next
        slow.next = slow.next.next

        return head
        