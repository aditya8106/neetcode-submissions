class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let left = 0
        let right = 0
        let arr = []
        while(left < nums1.length && right < nums2.length){
            if(nums1[left] <= nums2[right]){
                arr.push(nums1[left])
                left++
            }else{
                arr.push(nums2[right])
                right++
            }
            
        }
        while(right < nums2.length){
                arr.push(nums2[right])
                right++
         }
         while(left < nums1.length){
    arr.push(nums1[left]);
    left++;
}
            if( arr.length % 2 == 1) {
                return arr[Math.floor(arr.length / 2)]
            }
            let mid  = arr.length / 2

            return (arr[mid - 1] + arr[mid]) / 2
    }
    
}
