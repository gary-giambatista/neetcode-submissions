class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Format the string by removing spaces, non a-z letters and lowercasing
        const filteredS = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    
        let left = 0;
        let right = filteredS.length - 1;

        while (left < right) {
            if (filteredS[left] !== filteredS[right]) return false;

            left++
            right--
        }
        return true;
    }
}
