class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minlen = Infinity
        for(let i=0;i<nums.length;i++){
            let sum = 0
            for(let j = i;j< nums.length;j++){  
                sum+=nums[j]
              if( sum >= target ){
                minlen = Math.min( minlen , j - i + 1)
                break;     
                }     
            }   
        }
        if(minlen === Infinity){
            return 0
        }else{
            return minlen
        }
    }
}