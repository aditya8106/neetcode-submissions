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
        let min = Infinity
        let ans  = ''
        for(let i =0;i<s.length;i++){
            let sum = {}
            for(let j = i;j<s.length;j++){
                sum[s[j]] = (sum[s[j]] || 0) + 1
                let valid = true 
                for(let ch in tfreq){
                    if((sum[ch]||0) < tfreq[ch]){
                        valid = false
                        break
                    }
                }
                if(valid){
                            let len = j - i + 1;

                            if (len < min) {
                                min = len;
                                ans = s.slice(i, j + 1);
                            }
                        
                }
              
            }
        }
        return ans
    }
}
