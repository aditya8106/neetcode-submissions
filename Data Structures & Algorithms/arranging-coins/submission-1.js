class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
       return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
    }
}