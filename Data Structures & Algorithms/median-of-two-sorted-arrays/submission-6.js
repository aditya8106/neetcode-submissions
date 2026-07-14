class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        for(let i =0;i<nums2.length;i++){
            nums1.push(nums2[i])
        }
        nums1.sort((a,b) => a - b) 
        if(nums1.length %2 == 1){
            return nums1[Math.floor(nums1.length / 2)];
        }
        
        
        let mid = nums1.length / 2
        return (nums1[mid -1] + nums1[mid])/ 2
    }
}
