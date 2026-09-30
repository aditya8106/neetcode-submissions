class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        function dfs(index, currXor){
            if(index === nums.length){
                return currXor
            }
            let includes = dfs(index+1 , currXor ^ nums[index])
            let excludes = dfs(index+1, currXor)
            return includes + excludes 
        }
        return dfs(0,0)
    }
}
