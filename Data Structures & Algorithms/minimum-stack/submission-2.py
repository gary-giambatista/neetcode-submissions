class MinStack:

    def __init__(self):
        self.stack = []
        self.min_stack = []
        

    def push(self, val: int) -> None:
        # Always push to stack
        self.stack.append(val)

        # Conditionally append to min_stack
        if len(self.min_stack) == 0:
            self.min_stack.append(val)
        else:
            # Add the smallest value, duplicate values are okay
            # We want min_stack to have the smallest number at
            # the last index until a smaller number is added.
            # When it is added, it's added at the same index
            # as stack, which binds it to the correct time sequence
            new_val = min(self.min_stack[-1], val)
            self.min_stack.append(new_val)
        

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()
        

    def top(self) -> int:
        return self.stack[-1]
        

    def getMin(self) -> int:
        return self.min_stack[-1]
        
