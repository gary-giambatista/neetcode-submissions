class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let checkArr = null;

        let left = 0;
        let right = matrix.length - 1;

        // Indentify the correct sub array to check
        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            const currentArr = matrix[middle];

            // If target is here, it will be in this array
            if (currentArr[0] <= target && target <= currentArr.at(-1)) {
                checkArr = currentArr;
                break;
            }

            // Target is larger than both, move right
            if (currentArr[0] < target && target > currentArr.at(-1)) {
                left = middle + 1;
            } else {
                // Target is smaller than both, move left
                right = middle - 1;
            }
        }

        if (checkArr === null) return false;

        // Reset and execute second Binary Search
        left = 0;
        right = checkArr.length - 1;

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
