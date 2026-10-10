# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # Create a dummy node and insert it before head, incase we need to remove head
        dummyNode = ListNode(0, head)

        # Establish a slow and fast pointer
        slow = dummyNode
        fast = dummyNode

        # Increment the fast pointer for n + 1 times
        for _ in range(n + 1):
            fast = fast.next

        # Move both pointers to the end of the LL
        while fast:
            slow = slow.next
            fast = fast.next

        # Remove the nth node (slow.next)
        slow.next = slow.next.next

        # Return head
        return dummyNode.next

        