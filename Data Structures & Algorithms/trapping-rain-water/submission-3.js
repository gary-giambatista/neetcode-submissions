class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // Initialize 2 pointers
        let left = 0;
        let right = height.length - 1;

        // Initialize a max for both left and right
        let leftMax = 0;
        let rightMax = 0;

        // Initialize an incrementer for water
        let water = 0;

        // Begin 2 pointer initiration
        while (left < right) {
            // Check which is larger, left or right
            if (height[left] < height[right]) {
                // Left is the bottleneck, update the max
                leftMax = Math.max(leftMax, height[left]);

                // Increment water, by the difference between max and current
                water += leftMax - height[left];

                // Increment left
                left++;
            } else {
                // Right is the bottleneck, update the max
                rightMax = Math.max(rightMax, height[right]);

                // Increment water, by the difference betwen max and current
                water += rightMax - height[right];

                // Decrement right
                right--;
            }
        }
        return water;
    }
}
