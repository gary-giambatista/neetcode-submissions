class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // Create a stack
        const stack = [];

        // Create a bracket map
        const closedToOpenBracketMap = {
            ")": "(",
            "}": "{",
            "]": "["
        };

        // Loop through each bracket of s
        for (const bracket of s) {
            if (bracket in closedToOpenBracketMap) { // Checks keys (closed brackets)
                // This is a closing bracket
                if (stack.pop() !== closedToOpenBracketMap[bracket]) return false;
            } else {
                // Push the open bracket onto the stack
                stack.push(bracket);
            }
        }
        // Return a boolean, true if the stack is empty, otherwise false
        return stack.length === 0;
    }
}
