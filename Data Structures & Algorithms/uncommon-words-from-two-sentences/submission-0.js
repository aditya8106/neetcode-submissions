class Solution {
    /**
     * @param {string} s1
     * @return {string[]}
     */
    uncommonFromSentences(s1, s2) {
        const words = (s1 + " " + s2).split(" ");
        const countMap = new Map();
        
        for (const word of words) {
            countMap.set(word, (countMap.get(word) || 0) + 1);
        }
        
        const result = [];
        for (const [word, count] of countMap.entries()) {
            if (count === 1) {
                result.push(word);
            }
        }
        
        return result;
    }
}
