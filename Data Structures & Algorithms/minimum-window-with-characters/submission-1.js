class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tfreq = {}
        for(let k =0;k<t.length;k++){
            tfreq[t[k]] = (tfreq[t[k]] || 0) + 1
        }
        let need = Object.keys(tfreq).length
        let left = 0
        let have = 0
        let window = {}
        let minlen = Infinity
        let ans = ''
        
        for(let right =0; right < s.length ; right++){
            window[s[right]] = (window[s[right]] || 0) + 1;
            if(window[s[right]] == tfreq[s[right]]){
                have++
            }
            while(need == have){
                    let currlen = right - left + 1
                    if(currlen <  minlen){
                        minlen = currlen
                        ans = s.slice(left , right+1)
                    }
                    let ch = s[left]
                    window[ch]--;
                    if(window[ch] < tfreq[ch]){
                        have--
                    }
                    left++;
            }
        }
        return ans

    }
}
