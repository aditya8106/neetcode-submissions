class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k =  k%nums.length;
        for(let i=0;i<k;i++){
            let last = nums.pop()
            nums.unshift(last)            
       }
       return nums;
    }
}
