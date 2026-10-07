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
     * @return {void}
     */
    reorderList(head) {
        if (head === null || head.next === null) {
            return;
        }

        // 1. Find the middle
        let slow = head; // Slow will stop at middle
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2. Split and reverse the second half
        let second = slow.next; // The start of the 2nd half
        slow.next = null;

        let previous = null;

        while (second !== null) {
            const next = second.next;

            second.next = previous;

            previous = second;
            second = next;
        }

        second = previous;

        // 3. Merge the two halves alternately
        let first = head;

        while (second !== null) {
            const firstNext = first.next;
            const secondNext = second.next;

            first.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }
    }
}
