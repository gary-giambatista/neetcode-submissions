class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // 1. Build sets for each index of: row, column and box
        // Use .from() CB so the sets are unique, instead of the same with .fil()
        // i.e. don't use const "rows = Array(9).fill(new Set());"
        const rows = Array.from({ length: 9}, () => new Set()); 
        const cols = Array.from({ length: 9}, () => new Set()); 
        const boxes = Array.from({ length: 9}, () => new Set());

        // 2. Loop through rows and cols
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const currentValue = board[row][col];

                // 3. Skip empty values
                if (currentValue === ".") continue

                // 4. Calculate the current 3x3 box, in the 9x9 grid (9 total)
                // Formula: row * width (3) * column (flatten a 2D coordinate)
                const currentBox = 
                    Math.floor(row / 3) * 3 +
                    Math.floor(col / 3);

                // 5. Check all 3 sets to see if currentValue already exists
                if (rows[row].has(currentValue) ||
                    cols[col].has(currentValue) ||
                    boxes[currentBox].has(currentValue)
                    ) {
                        return false;
                }

                // 6. Add the currentValue to the sets
                rows[row].add(currentValue);
                cols[col].add(currentValue);
                boxes[currentBox].add(currentValue);

            }
        }
        // 7. No conflicts are found, return true
        return true;
    }
}
