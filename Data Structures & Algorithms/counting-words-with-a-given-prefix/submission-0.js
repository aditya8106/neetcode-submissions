class Solution {
    /**
     * @param {string[]} words
     * @param {string} pref
     * @return {number}
     */
    prefixCount(words, pref) {
        let cnt = 0
        for(let word of words){
            if(word.slice(0,pref.length) === pref){
                cnt++
            }
        }
        return cnt
    }
}
