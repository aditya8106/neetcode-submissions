class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        let res =[]
        for(let i =0;i<words.length;i++){
            for(let j = 0;j<words.length;j++){
                if(i===j) continue;
                if(words[i].includes(words[j]) && !res.includes(words[j])){
                    res.push(words[j])
                }
            }
        }
        return res;
    }
}
