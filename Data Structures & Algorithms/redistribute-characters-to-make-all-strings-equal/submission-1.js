class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    makeEqual(words) {
        const count = new Array(26).fill(0);
        for (const word of words) {
            for (const char of word) {
                count[char.charCodeAt(0) - 97]++;
            }
        }
        const n = words.length;
        for (const c of count) {
            if (c % n !== 0) {
                return false;
            }
        }
        return true;
    }
}
