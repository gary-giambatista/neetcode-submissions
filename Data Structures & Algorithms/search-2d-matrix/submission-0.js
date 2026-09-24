class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let checkArr = null;

        // Indentify the correct sub array to check
        for (const arr of matrix) {
            // Check the last index against target
            if (arr[0] <= target && target <= arr.at(-1)) {
                checkArr = arr;
                break;
            }
        }

        if (checkArr === null) return false;

        // Execute Binary Search
        let left = 0;
        let right = checkArr.length - 1;

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            if (checkArr[middle] === target) return true;

            if (checkArr[middle] < target) {
                // Increase
                left = middle + 1;
            } else {
                // Decrease
                right = middle -1;
            }
        }
        return false;
    }
}
