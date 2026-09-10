class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const s1Count = new Array(26).fill(0);
        const windowCount = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            windowCount[s2.charCodeAt(i) - 97]++;
        }

        if (this.sameCounts(s1Count, windowCount)) {
            return true;
        }

        for (let right = s1.length; right < s2.length; right++) {
            const left = right - s1.length;

            windowCount[s2.charCodeAt(right) - 97]++;
            windowCount[s2.charCodeAt(left) - 97]--;

            if (this.sameCounts(s1Count, windowCount)) {
                return true;
            }
        }

        return false;
    }

    sameCounts(a, b) {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }

        return true;
    }
}