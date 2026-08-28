class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // 1. Create an array to return the answer with, add neutral 1 values
        const answerArr = new Array(nums.length).fill(1);

        // First, get the prefix product, start with neutral 1, as
        // there is nothing to the left of the 0th index
        let prefixProduct = 1;

        // 2. Calculate the continuous left to right prefix product
        for (let i = 0; i < nums.length; i++) {
            answerArr[i] = prefixProduct; // First set answer to avoid including current index
            prefixProduct *= nums[i] // walk the nums arr to the right, and update the prefixProduct
        }

        // Repeat from the right, for suffix product, right to left
        // There is nothing to the right of nums[nums.length - 1]
        let suffixProduct = 1;

        // 3. Calculate the continuous right to left suffix product times the prefix product
        // (not including current index's number of course)
        for (let i = nums.length - 1; i >= 0; i--) {
            answerArr[i] *= suffixProduct; // Multiply by existing prefixProduct 
            suffixProduct *= nums[i]; // Update curent suffixProduct to include current index
        }

        // Multiplying left x right at current index not including current index = answer
        return answerArr;
    }
}
