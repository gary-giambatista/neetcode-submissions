class Solution {
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const need = new Map();

        for (const char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        const window = new Map();

        const required = need.size;
        let formed = 0;

        let left = 0;

        let bestLength = Infinity;
        let bestLeft = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            window.set(
                char,
                (window.get(char) || 0) + 1
            );

            if (
                need.has(char) &&
                window.get(char) === need.get(char)
            ) {
                formed++;
            }

            while (formed === required) {
                const currentLength = right - left + 1;

                if (currentLength < bestLength) {
                    bestLength = currentLength;
                    bestLeft = left;
                }

                const leftChar = s[left];

                window.set(
                    leftChar,
                    window.get(leftChar) - 1
                );

                if (
                    need.has(leftChar) &&
                    window.get(leftChar) < need.get(leftChar)
                ) {
                    formed--;
                }

                left++;
            }
        }

        if (bestLength === Infinity) {
            return "";
        }

        return s.slice(
            bestLeft,
            bestLeft + bestLength
        );
    }
}