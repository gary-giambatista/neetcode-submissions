class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows = len(matrix)
        cols = len(matrix[0])

        left = 0
        right = (rows * cols) - 1

        while left <= right:
            middle = (left + right) // 2

            row = middle // cols
            col = middle % cols

            if matrix[row][col] == target:
                return True

            if matrix[row][col] < target:
                # too small, move right
                left = middle + 1
            else:
                # too large, move left
                right = middle - 1

        return False;
