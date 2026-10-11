// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) return null;

        const oldToNew = new Map();

        let current = head;

        // First copy all nodes into the map using [[old, new]]
        while (current) {
            // Pointers cannot be set yet, as the nodes aren't yet created
            const copy = new Node(current.val);

            // We are creating entire node keys for ALL nodes
            oldToNew.set(current, copy);

            current = current.next;
        }

        // Reset current to head to restart loop
        current = head;

        // Second copy the pointers now that the nodes are in place
        while (current) {
            // The actual copy of the current node
            const newNode = oldToNew.get(current);

            // These are SEPARATE original node keys, which we are using to find
            // the newly created copy node, we just point our currentNode to them
            newNode.next = oldToNew.get(current.next) ?? null;
            newNode.random = oldToNew.get(current.random) ?? null;

            current = current.next;
        }

        // The head node key points to the start of our LL copy
        return oldToNew.get(head);
    }
}
