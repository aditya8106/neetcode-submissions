class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        nums.sort((a,b) => a - b);
        let a = nums[0]
        let b = nums[1]
        let c = nums[nums.length-2]
        let d = nums[nums.length-1]
        let Fc =  a*b
        let bc = c*d
        return  bc - Fc
        
    }
}
