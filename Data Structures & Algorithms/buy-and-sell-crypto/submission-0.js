class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // Store the max profit, default to 0
        let maxProfit = 0;

        // Create a stable reference to the lowest price seen
        // Set to Infitinity as default, so Math.min replaces the default value
        let minPrice = Infinity;

        // Loop through all prices
        for (const price of prices) {
            // Check if the current price is the new min price
            minPrice = Math.min(minPrice, price);

            // Using the current price, subtract the min price to calculate profit
            const profit = price - minPrice;

            // Update maxProfit based upon how much profit we've seen with the current price
            maxProfit = Math.max(maxProfit, profit)
        }

        return maxProfit;
    }
}
