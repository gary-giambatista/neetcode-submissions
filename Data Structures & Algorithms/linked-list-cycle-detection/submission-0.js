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
     * @return {boolean}
     */
    hasCycle(head) {
        // Create a set to store nodes in
        const visited = new Set();

        // Create a unique node incrementer
        let current = head;

        while (current !== null) {
            // The same node already has been added to the set
            if (visited.has(current)) return true;

            visited.add(current);
            current = current.next;
        }

        // Only unique nodes were found in the set
        return false;
    }
}
