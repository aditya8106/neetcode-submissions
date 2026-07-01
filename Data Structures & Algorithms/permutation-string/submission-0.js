class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let k = s1.length
        for(let i =0;i<=s2.length - k;i++){
            let str = s2.slice(i , i+k)
            if(s1.split('').sort().join('') == str.split('').sort().join('')){
                return true
            }
        }
        return false
    }
}
