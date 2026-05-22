class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let word = ''
        let left =0
        let rigth=0
        while(left < word1.length && rigth<word2.length){

            word+=word1[left];
            word+=word2[rigth]
            left++;
            rigth++;
        }
        while (left < word1.length) {
            word += word1[left];
            left++;
        }

        // remaining characters from word2
        while (rigth < word2.length) {
            word += word2[rigth];
            rigth++;
        }

        
        return word
    }
}
