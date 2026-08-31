class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // 1. Create a set
        const numsSet = new Set(nums);

        // 2. Create an answer number
        let longestSequence = 0;

        // 3. Loop through numsSet
        for (const num of numsSet) {

            // 4. If num - 1 doesn't exist, a new sequence starts here
            // (it's the smallest number of a consecutive sequence)
            if (!numsSet.has(num - 1)) {
                // 5. Initialize a counter from num to increment
                let currentStartNum = num;

                // 6. Initialize a sequence length count
                // start at 1 since we know num is in the set, and this allows
                // us to check currentStartNum + 1 to save 1 loop
                let currentSequenceLength = 1;

                // Increment the counter number and length when possible
                while (numsSet.has(currentStartNum + 1)) {
                    currentSequenceLength++;
                    currentStartNum++
                }

                // Set the max 
                longestSequence = 
                    Math.max(longestSequence, currentSequenceLength);
            }
        }

        return longestSequence;
    }
}
