class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let cnt = 0
        for(let i =0;i<k;i++){
            if(blocks[i] === 'W'){
                cnt++
            }
        }
        let res = cnt;
        for(let i = k;i<blocks.length;i++){
            if(blocks[i-k] === 'W'){
                cnt--
            }
            if(blocks[i] === 'W'){
                cnt++
            }
            res = Math.min(res , cnt)
        }
        return res;
    }
}
