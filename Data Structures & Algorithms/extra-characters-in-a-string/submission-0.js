class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    minExtraChar(s, dictionary) {
        let n = s.length
        let dp = new Array(n+1).fill(0)
        for(let i = n - 1;i>=0;i--){
            dp[i] = 1+dp[i+1]
            for(let word of dictionary){
                if(s.substring(i, i + word.length) === word){
                    let next = i + word.length
                    dp[i] = Math.min(dp[i], dp[next]);
                }
            }
        }
        return  dp[0]
    }
}
