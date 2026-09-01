class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // Create 2 pointers
        let left = 0;
        let right = numbers.length - 1;

        // Loop through numbers using the pointers
        while (left < right) {
            // Calculate sum of 2 pointers
            const sum = numbers[left] + numbers[right];

            // If sum is target, return the indexes + 1 (1-indexed)
            if (sum === target) {
                return [left + 1, right + 1];
            }

            // Adjust accordingly, since numbers is sorted by increasing
            if (sum < target) {
                left++; // Move right, we need a bigger number
            }
            if (sum > target) {
                right--; // Move left, we need a smaller number
            }
        }
    }
}
