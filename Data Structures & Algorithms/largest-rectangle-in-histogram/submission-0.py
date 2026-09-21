class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        max_area = 0;

        # (Position to height) tuple stack, monotonically non-decreasing by height 
        stack = []

        for index, height in enumerate(heights):
            # The start of the rectangle area 
            start = index

            # If previous has a larger height, remove it and calculate the area
            while stack and stack[-1][1] > height:
                previous_index, previous_height = stack.pop()

                # Calculate previous area
                width = index - previous_index
                area = previous_height * width

                # Compare this area to the current max
                max_area = max(max_area, area)

                # The rectangle could extend as far left as previous_index
                start = previous_index

            stack.append((start, height))

        # In case we never encounter a shorter height, check the stack
        for start, height in stack:
            width = len(heights) - start
            area = height * width

            max_area = max(max_area, area)
        
        return max_area