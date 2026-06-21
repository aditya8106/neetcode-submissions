class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLen  = 0
        let left = 0
        let set =new Set()

        for(let i =0;i<s.length;i++){

            
                while(set.has(s[i])){
                    set.delete(s[left])
                    left++
                }
                set.add(s[i])
                 maxLen = Math.max(maxLen , i-left+1)
           
        }
        return maxLen
    }
}
