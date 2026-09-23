class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let i = 0
        let j = 0
        while(i< word.length && j <abbr.length){
            if(abbr[j]>='0' && abbr[j]<='9'){
                if(abbr[j] === '0') return false;
                let num = 0
                while(abbr[j]>='0' && abbr[j]<='9'){
                    num = num * 10 + Number(abbr[j])
                    j++;
                }
                i += num
            }else {
                if(word[i] !== abbr[j]){
                    return false
                }
                i++
                j++
            }
        }
        return i === word.length && j == abbr.length
    }
}
