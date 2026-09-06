class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        const length = height.length;

        // Create arrays of max height from left and right
        const maxHeightFromLeft = new Array(length);
        const maxHeightFromRight = new Array(length);

        // Store the max height from the left (store a previous)
        maxHeightFromLeft[0] = height[0];

        // Calculate max height from left, checking against previous max
        // Offset by 1 to account for previous
        for (let i = 1; i < length; i++) {
            // Check current versus previous and set to min
            maxHeightFromLeft[i] = Math.max(
                height[i], maxHeightFromLeft[i - 1]
            )
        }
        
        // Store the max height from the right (store a previous)
        maxHeightFromRight[length - 1] = height[length - 1];

        // Calculate max height from right, checking against previous max
        for (let i = length - 2; i >= 0; i--) {
            maxHeightFromRight[i] = Math.max(
                height[i], maxHeightFromRight[i + 1]
            )
        }
        
        // Store the total water
        let water = 0;

        // Count the water comparing Math.min(left[i], right[i]) - height[i]
        for (let i = 0; i < length; i ++) {
            water += Math.min(maxHeightFromLeft[i], maxHeightFromRight[i]) - height[i]
        }

        return water;
    }
}
