class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const answer = []; // Values of nums
        const que = []; // Indexes of nums

        for (let right = 0; right < nums.length; right++) {
            // Remove smaller numbers from the end of the que
            while (que.length > 0 && nums[que[que.length - 1]] < nums[right]) {
                que.pop();
            }

            // Add right to the que
            que.push(right);

            const left = right - k + 1;

            // Remove indexes outside of the window
            // The que has smallest numbers on the right, largest on left
            if (que[0] < left) {
                // the index in que 0 is less than left, 
                // meaning it's outside the window
                que.shift();
            }

            // Once the window has reached the length of k (fixed size
            // only check the right index, 0 index based)
            if (right >= k - 1) {
                // Add the largest number to answer
                answer.push(nums[que[0]]);
            }
        }
        return answer;
    }
}
