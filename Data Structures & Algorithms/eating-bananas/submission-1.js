class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // The slowest and fastest banana eating rates
        let slowest = 1;
        let fastest = Math.max(...piles);

        // In the worst case, we have to eat at the fastest rate
        let answer = fastest;

        while (slowest <= fastest) {
            // Calculate a middle rate between slowest and fastest
            let rate = Math.floor((slowest + fastest) / 2);

            // Create a counter to sum the total time needed at the given rate
            let totalTime = 0;

            // For each pile, add up how fast it takes to eat all the bananas
            for (const pile of piles) {
                // use ceil for worst case scenarios since whole nums only
                totalTime += Math.ceil(pile / rate);
            };

            // Check if totalTime is less than or equal to h
            if (totalTime <= h) {
                // Update answer, as this rate works
                answer = rate;

                // But, let's try for a slower rate, in search of min rate
                // Slower = reduce fastest
                fastest = rate - 1;
            } else {
                // In this case, totalTime is too large
                // we need to go faster, so we increase slowest
                slowest = rate + 1;
            }
        }
        // Return the best rate we found
        return answer;
    }
}
