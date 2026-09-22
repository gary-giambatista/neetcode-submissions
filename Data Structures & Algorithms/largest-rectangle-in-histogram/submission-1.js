class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;

        // [index, height] tuple stack
        const stack = [];

        for (let i = 0; i < heights.length; i++) {
            let start = i;

            while (stack.length > 0 && stack.at(-1)[1] > heights[i]) {
                const [previousIndex, previousHeight] = stack.pop();

                const width = i - previousIndex;
                const area = width * previousHeight;

                maxArea = Math.max(maxArea, area);

                start = previousIndex;
            }
            stack.push([start, heights[i]]);
        }

        for (let [index, height] of stack) {
            const width = heights.length - index;
            const area = width * height;

            maxArea = Math.max(maxArea, area);
        }
        
        return maxArea;
    }
}
