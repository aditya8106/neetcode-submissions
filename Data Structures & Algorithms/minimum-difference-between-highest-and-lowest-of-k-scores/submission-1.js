class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        if(k == 1) return 0;
        nums.sort((a,b) => a - b)
        let min = Infinity
        for(let right = k -1 ; right < nums.length ;right++){
            let left  = right - k + 1
            let curr = nums[right] - nums[left]
            min = Math.min(min , curr) 
        }
        return min
    }
}
