class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numberToFrequencyMap = new Map();

        // 1. Build the frequency map
        for (const num of nums) {
            numberToFrequencyMap.set(
                num,
                ((numberToFrequencyMap.get(num) ?? 0 ) + 1)
            )
        }

        // 2. Make an array from the map
        const frequenciesMapArray = 
            Array.from(numberToFrequencyMap.entries());

        // 3. Sory the array in descending order
        frequenciesMapArray.sort((a, b) => {
            const aValue = a[1];
            const bValue = b[1];

            return bValue - aValue;
        })
        // console.log(frequenciesMapArray)

        // 4. Make an answer array
        const answer = [];

        // 5. Push the k amount of answer keys onto the answer array
        for (let i = 0; i < k; i++) {
            answer.push(frequenciesMapArray[i][0])
        }

        return answer;
    }
}
