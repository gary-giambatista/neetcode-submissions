class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let maxArea = 0;

        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const currentLeft = heights[left];
            const currentRight = heights[right];

            // Calculate width of the container( right - left), index based
            const containerWidth = right - left;
            const containerHeight = Math.min(currentLeft, currentRight);

            const currentArea = containerWidth * containerHeight;

            maxArea = Math.max(currentArea, maxArea);

            // Move the container wall in the direction of the smallest current wall
            if (currentLeft < currentRight) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }
}
