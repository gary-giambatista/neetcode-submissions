class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for val in tokens:
            if val == "+":
                most_recent = stack.pop()
                oldest = stack.pop()
                stack.append(int(oldest + most_recent))
            
            elif val == "-":
                most_recent = stack.pop()
                oldest = stack.pop()
                stack.append(int(oldest - most_recent))

            elif val == "*":
                most_recent = stack.pop()
                oldest = stack.pop()
                stack.append(int(oldest * most_recent))

            elif val == "/":
                most_recent = stack.pop()
                oldest = stack.pop()
                stack.append(int(oldest / most_recent))

            else:
                stack.append(int(val))
    
        return stack[-1]