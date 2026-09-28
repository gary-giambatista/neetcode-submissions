class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        // Check if the key already exists
        const existingEntry = this.keyStore.get(key);

        if (existingEntry) {
            // Push new entry onto the existing (timestamps strictly increasing)
            existingEntry.push({value: value, timestamp: timestamp})

            // Update this entry in the map
            this.keyStore.set(key, existingEntry);
        }
        else {
            // This is a new entry
            this.keyStore.set(key, [{value: value, timestamp: timestamp}]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const currentEntry = this.keyStore.get(key);

        if (!currentEntry) return "";

        const lastEntry = currentEntry.at(-1);

        if (lastEntry.timestamp === timestamp) return lastEntry.value;

        let left = 0;
        let right = currentEntry.length - 1;
        // Keep track of the closet number to timestamp target
        let best = "";

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);

            const entry = currentEntry[middle];
            
            if (entry.timestamp === timestamp) return entry.value;

            if (timestamp > entry.timestamp) {
                // This is a valid candidate
                best = entry.value;

                left = middle + 1;
            } else {
                // Timestamp has to be less than the entry
                right = middle - 1;
            }
        }
        return best;
    }
}
