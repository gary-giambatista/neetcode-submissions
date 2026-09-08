class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // Create a set of all seen chars
        const seenChars = new Set();

        // Initialize the left pointer at the first index
        let left = 0;
        // Initialize a max length counter
        let maxLength = 0;

        // Loop through the string moving the right pointer
        for (let right = 0; right < s.length; right++) {
            const currentChar = s[right];
            // Check if seenChars set has the current char
            // The goal is to move the left side until the duplicate is gone
            while (seenChars.has(currentChar)) {

                const leftMostChar = s[left];

                seenChars.delete(leftMostChar);
                // Move the left pointer forwards to get away from the duplicate
                left++;
            }

            seenChars.add(currentChar);

            // right - left: plus 1 to account for 0 based index counting
            const currentLength = right - left + 1;
            maxLength = Math.max(maxLength, currentLength);
        }
        return maxLength;
    }
}
