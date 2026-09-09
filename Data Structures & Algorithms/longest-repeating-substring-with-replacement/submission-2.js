class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // Create a count map: [[char, frequency]]
        const charCountMap = new Map();

        // Initialze the left side of the window
        let left = 0;
        // Create a max frequency to compare with
        let maxFrequency = 0;
        // Create a max length to compare with
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            const currentChar = s[right];

            // Update or set the char frequency in the map
            charCountMap.set(
                currentChar,
                (charCountMap.get(currentChar) ?? 0) + 1
            );

            // Attempt to update the maxFrequency
            maxFrequency = Math.max(
                maxFrequency,
                charCountMap.get(currentChar)
            )

            // Adjust the window so it's not too big using maxFrequency and k as the constraint
            while (right - left + 1 - maxFrequency > k) {
                let leftMostCharFrequency = charCountMap.get(s[left]);

                // Delete or decrement the left char from the freuqency map
                leftMostCharFrequency === 1 
                    ? charCountMap.delete(s[left]) 
                    : charCountMap.set(s[left], leftMostCharFrequency - 1)

                // Move left forwards to reduce the window's width
                left++;
            }

            // Attempt to update max width with the new window size
            maxLength = Math.max(maxLength, right - left + 1)
        }

        return maxLength
    }
}
