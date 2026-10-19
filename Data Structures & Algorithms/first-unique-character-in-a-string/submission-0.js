class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        const count = new Map();

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            count.set(char, (count.get(char) || 0) + 1);
        }

        for (let i = 0; i < s.length; i++) {
            if (count.get(s[i]) === 1) {
                return i;
            }
        }

        return -1;
    }
}
