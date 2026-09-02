class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const answer = [];

        // Sort nums, so we can use 3 pointers with arithmetic logic
        nums.sort((a, b) => a - b);

        // Initialize the first pointer, offset by the 2 other pointers
        for (let i = 0; i < nums.length - 2; i++) {

            // Avoid checking duplicates for i (check current vs. previous)
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // Left is 1 ahead of i
            let left = i + 1;
            // Right is the right end
            let right = nums.length - 1;

            // Begin left and right walking
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    answer.push([
                        nums[i],
                        nums[left],
                        nums[right]
                    ])

                    // If we got an answer, move on
                    left++;
                    right--;

                    // Arithmetic optimization logic

                    // Avoid duplicate checking for left, current vs. previous
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++
                    }
                    // Avoid duplicate checking for right, curent vs. previous
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                // Smart Increment, only in the direction needed to get closer
                // to sum, as we have sorted in ascending order
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return answer;
    }
}
