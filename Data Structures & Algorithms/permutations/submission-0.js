class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = []
        function dfs(curr , visted){
            if(curr.length === nums.length){
                res.push([...curr])
                return
            }
            for(let i=0;i<nums.length;i++){
                if(visted[i]) continue;
                visted[i] = true
                curr.push(nums[i])
                dfs(curr , visted)
                curr.pop()
                visted[i] = false
            }
        }
        dfs([] , new Array(nums.length).fill(false))
        return res
    }
}
