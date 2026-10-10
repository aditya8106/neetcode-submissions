class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = []
        function dfs(start,arr){
            if(arr.length == k){
                res.push([...arr])
                return
            }
           
           for(let i = start ; i<=n;i++){
             arr.push(i)
            dfs(i+1,arr)
            arr.pop() }
        }
        dfs(1,[])
        return res
    }
}
