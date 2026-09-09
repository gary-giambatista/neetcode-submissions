class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0; // Left side of the window
        let count = {}; // Map used to count { char: frequency } within the window
        let maxFrequency = 0; // The most frequent char in our window
        let maxLength = 0; // The max size of the window, given k as the constraint

        // Find the maxFrequency of chars within the window
        // And use it to calculate the maxLength of the mono-char window
        for (let right = 0; right < s.length; right++) {
            const currentChar = s[right];

            // Set or increment the count to/by 1
            count[currentChar] = (count[currentChar] || 0) + 1;

            // Update the maxFrequency with the current char
            maxFrequency = Math.max(maxFrequency, count[currentChar]);

            // Slide the window right by moving left to the right
            // We want to keep the maxFrequency character
            // We need to shrink the window, because we don't have enough replacements
            // windowLength - maxFrequency is greater than k, meaning the difference
            // (avaiable slots) are too many to replace, given k as the constraint
            while (right - left + 1 - maxFrequency > k) {
                count[s[left]]--;
                left++;
            }

            // Update max length using the width of the current window
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
