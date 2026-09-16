class Solution:
    def isValid(self, s: str) -> bool:
        # Create a stack
        stack = []

        # Define a map
        closed_to_open_map = {
            ")": "(",
            "}": "{",
            "]": "["
        }
        
        # Loop through the brackets in s
        for bracket in s:
            
            # Check if this is a closing bracket
            if bracket in closed_to_open_map:

                # This is a closing bracket, check stack for matching bracket
                if not stack or stack.pop() != closed_to_open_map[bracket]:
                    return False
            else:
                stack.append(bracket)
        
        return len(stack) == 0