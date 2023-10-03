# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# maintain a partition linked list of nodes >= x
# while removing those nodes from the current linked list
# this partition list will be connected after the remainder list

# initialize partition list with a dummy node to make things simpler to add
# also need a head and curr pointer for the partition list 
# to make things easier to add to the partition list
# and to add the partition head with the current list in the end

# partitioned nodes must be fully removed from the current list
# remove the connections from/to the prev/next nodes
# connect the removed node to the end of the partition list
# and connect the prev and next nodes to close the gap in the current list
# use a previous and current pointer to help with that

# also need to consider if the entire current list was partitioned
# which happens if prev pointer remained None
# e.g the head was continously being removed

class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        if not head: 
            return head

        partitionHead = ListNode()
        partitionCurr = partitionHead
        curr = head
        prev = None
        
        while curr:
            if curr.val >= x:
                partitionCurr.next = curr
                curr = curr.next
                if prev:
                    prev.next = curr
                else:
                    head = curr
                partitionCurr = partitionCurr.next
                partitionCurr.next = None
            else:
                prev = curr
                curr = curr.next
                
        if not prev: 
            return partitionHead.next

        if partitionHead.next:
            prev.next = partitionHead.next
        return head