class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedKeyMap = new Map();
        const sortedWords = strs.map((word, index) => {
            const sortedWord = [...word].sort().join("");
            // console.log(sortedWord)

            const sortedWordInMap = sortedKeyMap.has(sortedWord);
            const sortedKeyValuesArray = sortedKeyMap.get(sortedWord);

            if (sortedWordInMap) {
                sortedKeyMap.set(sortedWord,
                 [...sortedKeyValuesArray, strs[index]])
            } else {
                sortedKeyMap.set(
                    sortedWord,
                    [strs[index]]
                )
            }
        });

        return Array.from(sortedKeyMap.values());
    }
}
