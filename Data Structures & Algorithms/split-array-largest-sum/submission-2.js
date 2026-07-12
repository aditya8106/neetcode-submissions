class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        function canSplit(mid){
            let subarrs = 1
            let sum = 0
            for(let  num of nums){
                if(sum + num > mid){
                    subarrs++
                    sum = num
                }else{
                    sum += num
                }
            }
            return subarrs<=k;
        }
        let l = Math.max(...nums)
        let h = nums.reduce((a,b) => a+b ,0)
        while(l<=h){
            let mid = Math.floor((l+h)/2)
            if(canSplit(mid)){
                h = mid -1
            }else{
                l = mid+1
            }
        }
        return l
    }
}
