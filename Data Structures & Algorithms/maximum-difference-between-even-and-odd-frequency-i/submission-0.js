class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
    let freq = new Map();

    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    let maxOdd = 0;
    let minEven = Infinity;
    for (let count of freq.values()) {

        if (count % 2 === 1) {
            maxOdd = Math.max(maxOdd, count);
        } else {
            minEven = Math.min(minEven, count);
        }
    }

    return maxOdd - minEven;
}

}