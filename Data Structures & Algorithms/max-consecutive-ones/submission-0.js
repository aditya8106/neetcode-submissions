class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let ans =0
        let maxcnt = 0
        for(let num of nums){
            if(num === 1){
                ans++
                maxcnt = Math.max(maxcnt,ans)
            }else{
                ans =0
            }

        }
        return maxcnt
    }
}
