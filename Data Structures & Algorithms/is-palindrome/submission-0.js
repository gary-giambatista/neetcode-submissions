class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let trimmedS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let frontIndex = 0;

        for (let i = trimmedS.length - 1; i >= Math.floor(trimmedS.length / 2) - 1; i--) {
            const backIndex = i;
            if (trimmedS[frontIndex] !== trimmedS[backIndex]) return false;
            frontIndex++
        }
        return true;
    }
}
