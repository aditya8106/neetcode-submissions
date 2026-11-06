class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = []
    nums.sort((a,b)=>a-b);
    function dfs(start , curr){
        res.push([...curr]);
        for(let i = start ; i<nums.length;i++){
            if(i != start && nums[i] === nums[i-1]){
                continue
            }
            curr.push(nums[i])
            dfs(i+1,curr)
            curr.pop()
        }
    }
    dfs(0,[])
    return res
    }
}
