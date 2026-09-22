
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        let maxScore = 0;
        let leftZeros = 0;
        
        // Count total ones in the entire string
        let totalOnes = 0;
        for (let char of s) {
            if (char === '1') totalOnes++;
        }

        let rightOnes = totalOnes;
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] === '0') {
                leftZeros++;
            } else {
                rightOnes--;
            }

            let currentScore = leftZeros + rightOnes;
            maxScore = Math.max(maxScore, currentScore);
        }

        return maxScore;
    }
}
