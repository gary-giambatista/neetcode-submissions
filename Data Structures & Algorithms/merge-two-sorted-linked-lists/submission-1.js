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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        // Create a new linked list to merge into
        const dummy = new ListNode();
        // Assing a reference to the current node (head and tail),
        // to be incremented as the last reachable node of the longer of the 2 lists
        // * could be, but not garunteed to be tail
        let lastNode = dummy;

        // Assign pointers
        let current1 = list1;
        let current2 = list2;

        // Comparisons require both nodes to compare
        while (current1 && current2) {
            // Pick the smaller of the 2 nodes and assign it as next
            // Then increment that smaller node for the next comparison
            if (current1.val < current2.val) {
                lastNode.next = current1;
                current1 = current1.next;
            } else {
                lastNode.next = current2;
                current2 = current2.next;
            }
            // Increment current after choosing current 1 or current 2
            lastNode = lastNode.next;
        }

        // When 1 node is left connect it to our new linked list
        //  * If the length of the remaining LL is 1, lastNode will become tail
        if (current1) {
            lastNode.next = current1;
        } else if (current2) {
            lastNode.next = current2;
        }

        return dummy.next;
    }
}
