class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minlen = Infinity
        let left = 0 
        let sum = 0
        for(let i=0;i<nums.length;i++){
                sum+=nums[i]
            while( sum >= target ){
                minlen = Math.min( minlen , i - left + 1)
                sum-=nums[left]
                left++
            } 
                               
        }
        if(minlen === Infinity){
            return 0
        }else{
            return minlen
        }
    }
}