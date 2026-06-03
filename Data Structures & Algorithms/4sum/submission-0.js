class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        let n = nums.length;
        let res  = []
        nums.sort((a,b)=>a-b);
        for(let i =0;i<n-3;i++){
            for(let j = i+1;j<n-2;j++){
                if (i > 0 && nums[i] === nums[i-1]) continue;

                if(j>i+1 >0&& nums[j] === nums[j-1]) continue;
                let left = j+1
                let right =  n-1
                while(left < right){ 
                    let sum = nums[i] + nums[j] +nums[left] + nums[right];
                    if(sum < target ){
                        left ++;
                    }else if(sum > target){
                        right--;
                    }else{
                        res.push([nums[i],nums[j],nums[left],nums[right]]);
                        left++;
                        right--;
                        while(left<right&&nums[left] === nums[left -1]){
                            left++
                        }
                        while(left<right && nums[right] === nums[right+1]){
                            right--
                        }
                    }

                }
            }
        }
        return res;
    }
}
