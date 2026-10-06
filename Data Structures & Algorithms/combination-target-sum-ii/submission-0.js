class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let res = []
        candidates.sort((a,b) => a - b)
    function dfs(start,arr,sum){
        if (sum === target) {
            res.push([...arr])
            return
        }
        for(let  i = start ;i<candidates.length;i++){
        if(sum + candidates[i] > target) break;
        if(i > start && candidates[i] === candidates[i-1]) continue
        arr.push(candidates[i])
        dfs(i+1,arr,sum+candidates[i])
        arr.pop()
        }
    }
    dfs(0,[],0)
    return res
    }
}
