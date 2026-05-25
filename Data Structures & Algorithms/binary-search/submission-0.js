class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        nums.sort((a,b)=>a-b)
        let left =0;
        let rigth=nums.length;
        while(left <rigth){
            let mid = Math.floor((left+rigth)/2);
            if(nums[mid] == target){
                return mid;
            }
            else if(nums[mid]<target){
                left = mid+1
            }else{
                rigth = mid
            }
        }
        return -1
    }
}
