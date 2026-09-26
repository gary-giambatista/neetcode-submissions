class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);

            if (target === nums[middle]) return middle;

            // Left is sorted
            if (nums[left] <= nums[middle]) {
                // Target is within left
                if (nums[left] <= target && target < nums[middle]) {
                    right = middle - 1;
                }
                // Target is not within left, move right
                else {
                    left = middle + 1;
                }
            }
            // Right is sorted
            else {
                // Target is within right
                if (nums[middle] < target && target <= nums[right]) {
                    left = middle + 1;
                }
                // Target is not within right, move left
                else {
                    right = middle - 1;
                }
            }
        }

        // Target is not in nums
        return -1
    }
}
