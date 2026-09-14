from collections import deque

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        result = []
        q = deque()

        for right in range(len(nums)):
            # Remove smaller numbers from the back
            while q and nums[q[-1]] < nums[right]:
                q.pop()

            q.append(right)

            left = right - k + 1

            # Remove index if it has left the window
            if q[0] < left:
                q.popleft()

            # Record the maximum once the window has the size of k
            if right >= k - 1:
                result.append(nums[q[0]])

        return result