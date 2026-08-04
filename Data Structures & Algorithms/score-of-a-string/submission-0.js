class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let score = 0
        let left =0
        while(left < s.length - 1){
            score += Math.abs(s.charCodeAt(left+1) - s.charCodeAt(left));
            left++
        }
        return score
    }
}
