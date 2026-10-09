/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Create a dummy node in front of head, incase we need to remove the head itself
        const dummy = new ListNode(0, head);

        // Create a slow and fast pointer
        let slow = dummy;
        let fast = dummy;

        // Increment fast to n + 1 position
        // We want slow to land on the node BEFORE the node to be removed, so +1
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        };

        // Move both slow and fast to the end of the LL
        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        };

        // Remove the nth node (slow.next)
        slow.next = slow.next.next

        // Return the head of the updated LL
        return dummy.next;
    }
}
