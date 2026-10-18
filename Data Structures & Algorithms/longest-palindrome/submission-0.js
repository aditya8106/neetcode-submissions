class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        const charCounts = new Map();
                for (const char of s) {
            charCounts.set(char, (charCounts.get(char) || 0) + 1);
        }
        
        let length = 0;
        let oddFound = false;
        
        for (const count of charCounts.values()) {
            if (count % 2 === 0) {
                length += count;
            } else {
                length += count - 1; 
                oddFound = true;    
            }
        }
        
        if (oddFound) {
            length += 1;
        }
        
        return length;
    }
}
