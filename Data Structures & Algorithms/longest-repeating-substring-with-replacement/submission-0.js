class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

    let freq = new Array(26).fill(0);

    let left = 0;
    let maxFreq = 0;
    let ans = 0;

    for (let right = 0; right < s.length; right++) {

        // Add current character
        let idx = s.charCodeAt(right) - 65;
        freq[idx]++;

        // Update maximum frequency in window
        maxFreq = Math.max(maxFreq, freq[idx]);

        // If window is invalid, shrink it
        while ((right - left + 1) - maxFreq > k) {

            freq[s.charCodeAt(left) - 65]--;
            left++;
        }

        // Update answer
        ans = Math.max(ans, right - left + 1);
    }

    return ans;
}
    }
