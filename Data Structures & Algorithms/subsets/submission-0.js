class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [] 
        let curr = []
        function dfs(ind){
            if(ind ===  nums.length){
                res.push([...curr])
                return
            }
            curr.push(nums[ind])
            dfs(ind + 1)
            curr.pop()
            dfs(ind + 1)
        }
        dfs(0)
        return res;
    }
}
 