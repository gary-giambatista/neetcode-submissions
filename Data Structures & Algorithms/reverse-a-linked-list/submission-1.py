# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        previous = None
        current = head

        while current:
            # Capture the linked list
            next_node = current.next

            # Flip the direction by changing pointers
            current.next = previous
            previous = current
            current = next_node

        return previous