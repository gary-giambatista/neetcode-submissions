class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // s1 cannot be larger than s2, since we're checking s2 for s1's chars
        if (s1.length > s2.length) return false;

        // Initialze 2 [[char, freq]] maps
        const s1CharToFreqMap = new Map();
        const windowCharToFreqMap = new Map();

        // Fill out the maps for the size of s1.length
        for (let i = 0; i < s1.length; i++) {
            // Use this map to test windows and check if they match
            s1CharToFreqMap.set(
                s1[i],
                (s1CharToFreqMap.get(s1[i]) ?? 0) + 1
            )
            // Intialize the starting window, at the width of s1.length
            windowCharToFreqMap.set(
                s2[i],
                (windowCharToFreqMap.get(s2[i]) ?? 0) + 1
            )
        }

        // Check if the window matches any possible s1 permutations
        if (this.mapsAreEqual(s1CharToFreqMap, windowCharToFreqMap)) return true;

        // Slide the window: starting at s1.length makes right the next char, since it's not
        // 0 based, like our intial loop was
        for (let right = s1.length; right < s2.length; right++) {
            const rightNextChar = s2[right];
            const leftCharToRemove = s2[right - s1.length]; // gives us left
            let leftCharToRemoveFreq = windowCharToFreqMap.get(leftCharToRemove);

            // Remove or decrement the left side char
            leftCharToRemoveFreq === 1 
                ? windowCharToFreqMap.delete(leftCharToRemove)
                : windowCharToFreqMap.set(leftCharToRemove, leftCharToRemoveFreq - 1);

            // Slide the window right, adding or incrementing the new right char
            windowCharToFreqMap.set(
                rightNextChar,
                (windowCharToFreqMap.get(rightNextChar) ?? 0) + 1
            )

            // Check if the new window matches s1
            if (this.mapsAreEqual(s1CharToFreqMap, windowCharToFreqMap)) return true;

        }
        // No window matched s1
        return false;
    }

    mapsAreEqual(map1, map2) {
        // Sizes must match, otherwise they're not equal
        if (map1.size !== map2.size) return false;

        // Loop through map2 comparing to map1 (s1 map)
        for (const [char, freq] of map2) {
            const map1CharFreq = map1.get(char);

            if (!map1CharFreq ||
                map1CharFreq !== freq) return false;
        }
        return true;
    }
}
