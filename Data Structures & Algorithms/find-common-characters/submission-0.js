class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    commonChars(words) {let result = [];
        let minFreq = Array(26).fill(Infinity);
        
            for (let word of words) {
                    let freq = Array(26).fill(0);
                    
                            for (let ch of word) {
                                        freq[ch.charCodeAt(0) - 97]++;
                                                }
                                                
                                                        for (let i = 0; i < 26; i++) {
                                                                    minFreq[i] = Math.min(minFreq[i], freq[i]);
                                                                            }
                                                                                }
                                                                                
                                                                                    for (let i = 0; i < 26; i++) {
                                                                                            while (minFreq[i] > 0) {
                                                                                                        result.push(String.fromCharCode(i + 97));
                                                                                                                    minFreq[i]--;
                                                                                                                            }
                                                                                                                                }
                                                                                                                                
                                                                                                                                    return result;}
}
