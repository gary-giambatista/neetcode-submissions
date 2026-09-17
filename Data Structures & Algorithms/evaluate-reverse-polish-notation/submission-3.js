class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            if (token === "+") {
                const mostRecentNumber = stack.pop();
                const oldestNumber = stack.pop();
                stack.push(oldestNumber + mostRecentNumber)

            } else if (token === "-") {
                const mostRecentNumber = stack.pop();
                const oldestNumber = stack.pop();
                stack.push(oldestNumber - mostRecentNumber)                

            } else if (token === "*") {
                const mostRecentNumber = stack.pop();
                const oldestNumber = stack.pop();
                stack.push(oldestNumber * mostRecentNumber)                

            } else if (token === "/") {
                const mostRecentNumber = stack.pop();
                const oldestNumber = stack.pop();
                stack.push(Math.trunc(oldestNumber / mostRecentNumber))                

            } else {
                // Push numbers onto the stack
                stack.push(Number(token));
            }
        }
        return stack[stack.length - 1];
    }
}
