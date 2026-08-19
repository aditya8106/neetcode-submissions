class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let res = []
        for(let i =0;i<nums1.length;i++){
            let currr = nums1[i]
            let ans = -1
            for(let j =0 ;j<nums2.length;j++){
                if(nums2[j] === currr){
                    for(let k = j+1;k<nums2.length;k++){
                        if(nums2[k] > currr){
                           ans = nums2[k];
                            break;
                        }
                    }
                 break;

                }
            }
            res.push(ans)
        }
        return res;
    }
}
