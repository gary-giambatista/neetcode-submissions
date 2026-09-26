class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            middle = (left + right) // 2

            if nums[middle] == target:
                return middle

            # Left is sorted
            if nums[middle] >= nums[left]:

                # Target is within the left side
                if nums[left] <= target < nums[middle]:
                    # Move closer to target
                    right = middle - 1
                else:
                    # Target isn't within the left half, check the other half
                    left = middle + 1
            
            # Right is sorted
            else:
                
                # Target is within the right side
                if nums[middle] < target <= nums[right]:
                    # Target is within right side, get closer to it
                    left = middle + 1
                else:
                    # Target is not within right side, check left
                    right = middle - 1

        # Target was not found
        return -1
