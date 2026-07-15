class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if(nums1.length > nums2.length ){
            return this.findMedianSortedArrays(nums2 , nums1)
        }
        let m = nums1.length
        let n = nums2.length
        let tot = m + n;
        let half = Math.floor((tot + 1) / 2)

        let left = 0 
        let right = m
        while(left  <= right){
            let  i = Math.floor((left + right) /  2)
            let j = half - i
            let l1 = (i == 0) ? -Infinity : nums1[i -1]
            let r1 = (i == m) ? Infinity : nums1[i]
            let l2 = (j == 0) ? -Infinity : nums2[j-1]
            let r2 = (j == n) ? Infinity :   nums2[j]
            if(l1<=r2 && l2<=r1){
                if(tot%2 == 1 ){
                    return Math.max(l1 , l2)
                }
                return (Math.max(l1 , l2) + Math.min(r1,r2))/2
            }
            if (l1 > r2){
                right = i - 1
            }else{
                left = i+1
            }
        }
    }
    
}
