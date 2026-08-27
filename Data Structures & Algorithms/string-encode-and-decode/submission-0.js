class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";

        for (const str of strs) {
            encodedStr += `${str.length}#${str}`
        }

        return encodedStr;
    }

    /**
     * @param {string} encodedStr
     * @returns {string[]}
     */
    decode(encodedStr) {
        let decodedStr = [];
        let i = 0;

        // 1. Loop through encoded string
        while (i < encodedStr.length) {
            let separator = i;

            // 2. Find the separators
            while (encodedStr[separator] !== "#") {
                separator++;
            }

            // 3. Get the length number
            const length = Number(encodedStr.slice(i, separator));
            const start = separator + 1;
            const end = start + length;

            // 4. Cut off the original string and push it to the decoded array
            decodedStr.push(encodedStr.slice(start, end))

            // 5. Start the next iteration of the loop from the end
            i = end;
        }
        return decodedStr;
    }
}
