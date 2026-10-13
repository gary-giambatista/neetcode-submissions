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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0);
        let current = dummy;

        let carry = 0;

        while (l1 !== null || l2 !== null || carry !== 0) {
            // Read the current digits
            const val1 = l1 !== null ? l1.val : 0;
            const val2 = l2 !== null ? l2.val : 0;

            // Add both digits and any previous carry
            const sum = val1 + val2 + carry;

            // Extract the digit and new carry
            const digit = sum % 10;
            carry = Math.floor(sum / 10);

            // Append a new node to our result
            current.next = new ListNode(digit);
            current = current.next;

            // Advance the input pointers
            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;
        }

        return dummy.next;
    }
}
