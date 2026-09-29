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
     * @return {ListNode}
     */
    reverseList(head) {
        let previous = null;
        let current = head;

        while (current !== null) {
            // Connect to the rest of the list
            const next = current.next;

            // Reverse the pointer
            current.next = previous;

            // Move both pointers forward
            previous = current;
            current = next;
        }

        return previous;
    }
}
