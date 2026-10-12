"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None
        
        old_to_new = {}

        current = head

        # Build a new LL to use as a copy
        while current:
            # Create a new node
            new_node = Node(current.val)

            # Set current node and new node in map as key, val
            old_to_new[current] = new_node

            # Increment the pointer down the LL
            current = current.next

        # Reset pointer to head
        current = head

        # Connect the next and random pointers
        while current:
            current_node = old_to_new[current]

            # Connect the next and random pointers, get returns None if it doesn't exist
            current_node.next = old_to_new.get(current.next)
            current_node.random = old_to_new.get(current.random)

            # Increment pointer down the LL
            current = current.next

        # Get the head of the new LL and return it
        return old_to_new.get(head)
