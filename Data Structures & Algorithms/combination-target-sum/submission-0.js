class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [] 
        function dfs(i , curr_arr,curr_sum){
            if(i >=nums.length || curr_sum > target){
                return
            }
            if(curr_sum == target){
                res.push([...curr_arr])
                return
            }
            curr_arr.push(nums[i])
            dfs(i, curr_arr,curr_sum + nums[i])
            curr_arr.pop()
            dfs(i+1,curr_arr,curr_sum)
        }
        dfs(0,[],0)
        return res;
    }
}
