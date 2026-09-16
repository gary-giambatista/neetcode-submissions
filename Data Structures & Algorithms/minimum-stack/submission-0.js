class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if (this.minStack.length === 0) {
            this.minStack.push(val)
        } else {
            const currentMin = this.minStack[this.minStack.length - 1];

            const newMin = Math.min(
                currentMin,
                val
            )

            this.minStack.push(newMin);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];

    }
}
