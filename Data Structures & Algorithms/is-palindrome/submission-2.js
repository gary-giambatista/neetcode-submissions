class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Format the string by removing spaces, non a-z letters and lowercasing
        const filteredS = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        // Only need to loop through half, since we check front <=> back
        const half = Math.ceil(filteredS.length / 2); 
        let frontIndex = 0;

        for (let backIndex = filteredS.length - 1; backIndex >= half; backIndex--) {
            if (filteredS[frontIndex] !== filteredS[backIndex]) return false;

            frontIndex++;
        }

        return true;
    }
}
