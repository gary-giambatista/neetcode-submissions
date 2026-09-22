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

            if (nums[middle] === target) return middle;

            if (nums[middle] > target) {
                // Too large, move left
                right = middle - 1;
            } else if (nums[middle] < target) {
                // Too small, move right
                left = middle + 1;
            }
        }
        return -1;
    }
}
