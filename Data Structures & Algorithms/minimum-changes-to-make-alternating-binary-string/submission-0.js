class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minOperations(s) {
        let mismatches = 0;
        
        for (let i = 0; i < s.length; i++) {
            
            const expectedChar = (i % 2 === 0) ? '0' : '1';
            if (s[i] !== expectedChar) {
                mismatches++;
            }
        }
        
        
        return Math.min(mismatches, s.length - mismatches);
    }
}
