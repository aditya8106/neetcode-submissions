class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
    let frequency = new Map();

    for (let str of arr) {
        frequency.set(str, (frequency.get(str) || 0) + 1);
    }

    for (let str of arr) {

        if (frequency.get(str) === 1) {

            k--;

            if (k === 0) {
                return str;
            }
        }
    }

    return "";
    }
}
