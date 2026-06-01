class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        for(let i =0;i<nums.length;i++){
            for(let j =i+1;j<nums.length;j++){
                if(nums[j] == nums[i]){
                    nums.splice(j,1)
                    j--
                }
            }
        }
        return nums.length;
    }
}
