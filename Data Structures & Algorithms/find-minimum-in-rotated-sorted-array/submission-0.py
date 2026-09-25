class Solution:
    def findMin(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1

        # Searching for a specific number, so no =
        while (left < right):
            middle = (left + right) // 2

            if nums[middle] > nums[right]:
                # Smaller numbers are to the right, move right
                left = middle + 1
            else:
                # Middle could be the smallest
                right = middle

        return nums[right]