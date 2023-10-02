# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# involves removing segments of values with duplicates
# need to keep track of a previous and current
# when current.val == current.next.val, find the next new val to set prev.next to
# cutting off the whole segment of that value with duplicates

# also need to handle when duplicates are at the head
# which involves setting a new head
# previous stays None and current sets to new head

class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next: return head
        
        prev = None
        curr = head

        while curr and curr.next:
            if curr.val == curr.next.val:
                next = curr.next
                while next and next.val == curr.val: 
                    next = next.next
                    
                if not prev:
                    head = next
                    curr = head
                else:
                    prev.next = next
                    curr = next
            else:
                prev = curr
                curr = curr.next
            
        return head
            