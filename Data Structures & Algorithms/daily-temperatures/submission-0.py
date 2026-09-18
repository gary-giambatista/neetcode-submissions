class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        answer = [0] * len(temperatures)
        # Store Indexes to temperatures:
        # temperatures will always be stored in descending order
        index_stack = []


        for index, temp in enumerate(temperatures):

            # The current temp is larger than the last temp (smallest or equal to smallest)
            while index_stack and temperatures[index_stack[-1]] < temp:
                # Get the difference between the current index and stored previous temp index
                day_difference = index - index_stack[-1]

                answer[index_stack[-1]] = day_difference

                index_stack.pop()

            # Push the current index onto the stack
            index_stack.append(index)
            
        return answer