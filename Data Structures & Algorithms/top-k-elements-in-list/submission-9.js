class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let bucket  = Array.from({length : nums.length +1}, () => []);
        let res = []
        let map = new Map()
        for(let num of nums){
           map.set(num,(map.get(num)||0) + 1)
        }
        for(let [num , freq] of map){
            bucket[freq].push(num)
        }
       
            for(let end = bucket.length-1;end>=0;end--){
                 for(let num of bucket[end]){
                    res.push(num)
                    if(res.length === k){
                        return res
                    }
            }
        }
    }
}
