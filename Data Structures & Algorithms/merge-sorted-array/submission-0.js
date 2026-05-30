class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let left =0;
        let right =0
        let arr =[]
        let index =0
        while(left < m &&right<n){
            if(nums1[left]<=nums2[right]){
                arr[index]=nums1[left];
                left++;
                index++
            }else{
                arr[index] = nums2[right];
                index++;
                right++; 
            }
        }
        while(left <m){
            arr[index++] = nums1[left++]
        }
        while(right<n){
            arr[index++] = nums2[right++]
        }
    for (let i = 0; i < m + n; i++) {
        nums1[i] = arr[i];
    }    }
}
