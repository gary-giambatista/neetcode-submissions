class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        answer = [0] * len(temperatures)
        # Store Indexes to temperatures (days):
        # temperatures will always be stored in descending order
        day_stack = []


        for day, temp in enumerate(temperatures):

            # The current temp is larger than the last temp (smallest or equal to smallest)
            while day_stack and temperatures[day_stack[-1]] < temp:
                # Get the difference between the current day and stored previous temp day
                previous_day = day_stack.pop()

                day_difference = day - previous_day

                answer[previous_day] = day_difference

            # Push the current day onto the stack
            day_stack.append(day)

        return answer